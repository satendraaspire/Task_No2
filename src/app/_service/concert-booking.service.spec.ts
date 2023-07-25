import { TestBed } from '@angular/core/testing';

import { ConcertBookingService } from './concert-booking.service';

describe('ConcertBookingService', () => {
  let service: ConcertBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
