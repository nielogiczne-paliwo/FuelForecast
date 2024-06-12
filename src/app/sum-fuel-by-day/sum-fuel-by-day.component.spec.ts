import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumFuelByDayComponent } from './sum-fuel-by-day.component';

describe('SumFuelByDayComponent', () => {
  let component: SumFuelByDayComponent;
  let fixture: ComponentFixture<SumFuelByDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumFuelByDayComponent]
    });
    fixture = TestBed.createComponent(SumFuelByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
