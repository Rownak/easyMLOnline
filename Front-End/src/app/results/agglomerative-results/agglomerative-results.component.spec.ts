import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgglomerativeResultsComponent } from './agglomerative-results.component';

describe('AgglomerativeResultsComponent', () => {
  let component: AgglomerativeResultsComponent;
  let fixture: ComponentFixture<AgglomerativeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgglomerativeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgglomerativeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
