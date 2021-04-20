import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationResultsComponent } from './classification-results.component';

describe('ClassificationResultsComponent', () => {
  let component: ClassificationResultsComponent;
  let fixture: ComponentFixture<ClassificationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
