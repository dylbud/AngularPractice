import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzlerComponent } from './quizzler.component';

describe('QuizzlerComponent', () => {
  let component: QuizzlerComponent;
  let fixture: ComponentFixture<QuizzlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
