import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbscanResultsComponent } from './dbscan-results.component';

describe('DbscanResultsComponent', () => {
  let component: DbscanResultsComponent;
  let fixture: ComponentFixture<DbscanResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbscanResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbscanResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
