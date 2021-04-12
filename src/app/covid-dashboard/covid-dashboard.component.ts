import { Component, OnInit } from '@angular/core';
import { CovidService } from './covid.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css'],
})
export class CovidDashboardComponent implements OnInit {
  // width and height of the view window where the report displays:
  view: any[] = [600, 400];

  // options for the chart
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Deaths';
  timeline = true;

  colorScheme = {
    domain: [
      '#9370DB',
      '#87CEFA',
      '#FA8072',
      '#FF7F50',
      '#90EE90',
      '#9370DB',
      '#BEA9E9',
      '#BCF4BC',
    ],
  };

  usData$: Observable<any>;

  constructor(private service: CovidService) {}

  ngOnInit() {
    this.usData$ = this.service.getData('united-states');
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
