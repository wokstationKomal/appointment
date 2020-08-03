import { TestBed } from '@angular/core/testing';

import { AppoinmentsService } from './appoinments.service';

describe('AppoinmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppoinmentsService = TestBed.get(AppoinmentsService);
    expect(service).toBeTruthy();
  });
});
