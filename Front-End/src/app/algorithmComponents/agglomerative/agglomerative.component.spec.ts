import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgglomerativeComponent } from './agglomerative.component';

describe('AgglomerativeComponent', () => {
  let component: AgglomerativeComponent;
  let fixture: ComponentFixture<AgglomerativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgglomerativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgglomerativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
