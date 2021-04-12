import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, zip } from 'rxjs';
import * as moment from 'moment';
import { map, tap } from 'rxjs/operators';
import { ControlContainer } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get('https://api.covid19api.com/summary');
  }

  getCountries() {
    return this.http.get('https://api.covid19api.com/countries');
  }

  getData(country: string) {
    const endDate = new Date();
    const startDate = new Date(2020, 2, 1);
    const start = `${moment(startDate).format('YYYY-MM-DD')}T00:00:00Z`;
    const end = `${moment(endDate).format('YYYY-MM-DD')}T00:00:00Z`;

    const usDeathsUrl = `https://api.covid19api.com/total/country/${country}/status/deaths?from=${start}&to=${end}`;
    const usDeathsData$ = this.http.get(usDeathsUrl);

    const usConfirmedUrl = `https://api.covid19api.com/total/country/${country}/status/confirmed?from=${start}&to=${end}`;
    const usConfirmedData$ = this.http.get(usConfirmedUrl);

    const usRecoveredUrl = `https://api.covid19api.com/total/country/${country}/status/recovered?from=${start}&to=${end}`;
    const usRecoveredData$ = this.http.get(usRecoveredUrl);

    return combineLatest(
      usConfirmedData$,
      usRecoveredData$,
      usDeathsData$
    ).pipe(
      map(([confirmed, recovered, deaths]) => {
        return [
          {
            name: 'Confirmed',
            series: Object.entries<any>(confirmed).map(([name, value]) => {
              return {
                name: moment(new Date(value.Date)).format('MM/DD'),
                value: value.Cases,
              };
            }),
          },
          {
            name: 'Recovered',
            series: Object.entries<any>(recovered).map(([name, value]) => {
              return {
                name: moment(new Date(value.Date)).format('MM/DD'),
                value: value.Cases,
              };
            }),
          },
          {
            name: 'Deaths',
            series: Object.entries<any>(deaths).map(([name, value]) => {
              return {
                name: moment(new Date(value.Date)).format('MM/DD'),
                value: value.Cases,
              };
            }),
          },
        ];
      })
    );
  }
}
