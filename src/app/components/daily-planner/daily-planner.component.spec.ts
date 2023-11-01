import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlannerComponent } from './daily-planner.component';

describe('DailyPlannerComponent', () => {
  let component: DailyPlannerComponent;
  let fixture: ComponentFixture<DailyPlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyPlannerComponent]
    });
    fixture = TestBed.createComponent(DailyPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
