import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmeansResultsComponent } from './kmeans-results.component';

describe('KmeansResultsComponent', () => {
  let component: KmeansResultsComponent;
  let fixture: ComponentFixture<KmeansResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmeansResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmeansResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
