import { TestBed } from '@angular/core/testing';

import { ConcertBookingService } from './concert-booking.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MockService } from 'ng-mocks';
import { mockData } from './concert-booking.constant';

describe('ConcertBookingService', () => {
  let service: ConcertBookingService;

  beforeEach(() => {
    const mockServiceSub = () => ({
      get: (_defaultPolicies: any, _array: any) => ({}),
      post: (_searchByState: any, _array: any, _data: any) => ({}),
    });

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        ConcertBookingService,
        { provide: MockService, useFactory: mockServiceSub },
        HttpClientModule,
        ReactiveFormsModule,
      ],
    });
    service = TestBed.inject(ConcertBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when calls getConcertDetails', () => {
    it('should calls getConcertDetails.get', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getConcertDetails').and.callThrough();
      service.getConcertDetails();
      expect(service.getConcertDetails).toHaveBeenCalled();
    });
  });

  describe('when calls addBookingForConcert', () => {
    it('should calls addBookingForConcert.post', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'addBookingForConcert').and.callThrough();
      const mockValue = mockData;
      service.addBookingForConcert(mockValue);
      expect(service.addBookingForConcert).toHaveBeenCalled();
    });
  });
});
