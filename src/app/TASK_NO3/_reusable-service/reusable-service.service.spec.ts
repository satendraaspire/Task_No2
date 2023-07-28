import { TestBed } from '@angular/core/testing';

import { ReusableService } from './reusable-service.service';

describe('ReusableServiceService', () => {
  let service: ReusableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
