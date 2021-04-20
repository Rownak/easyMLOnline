import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbScanComponent } from './db-scan.component';

describe('DbScanComponent', () => {
  let component: DbScanComponent;
  let fixture: ComponentFixture<DbScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
