import { TestBed } from '@angular/core/testing';

import { StudentsActivityService } from './students-activity.service';

describe('StudentsActivityService', () => {
  let service: StudentsActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
