import { TestBed } from '@angular/core/testing';

import { ReusableServices } from './reusable.service';

describe('ReusableServices', () => {
  let service: ReusableServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
