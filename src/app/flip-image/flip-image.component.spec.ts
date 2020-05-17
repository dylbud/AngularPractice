import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipImageComponent } from './flip-image.component';

describe('FlipImageComponent', () => {
  let component: FlipImageComponent;
  let fixture: ComponentFixture<FlipImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
