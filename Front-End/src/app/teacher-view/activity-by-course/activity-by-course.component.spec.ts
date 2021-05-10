import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByCourseComponent } from './activity-by-course.component';

describe('ActivityByCourseComponent', () => {
  let component: ActivityByCourseComponent;
  let fixture: ComponentFixture<ActivityByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
