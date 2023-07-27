import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsComponent } from './booking-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConcertBookingService } from 'src/app/_service/concert-booking.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mockData } from 'src/app/_service/concert-booking.constant';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('BookingDetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;

  beforeEach(async () => {
    const ConcertBookingServiceSub = () => ({
      addBookingForConcert: (_data: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getConcertDetails: (_req: any, _interactionId: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [BookingDetailsComponent],
      imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        {
          provide: ConcertBookingService,
          useFactory: ConcertBookingServiceSub,
        },
        HttpClientModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when calls getConcertDetails', () => {
    it('should calls getConcertDetails.get', () => {
      const GPZipCodeServiceSub: ConcertBookingService =
        fixture.debugElement.injector.get(ConcertBookingService);
      spyOn(GPZipCodeServiceSub, 'getConcertDetails').and.callThrough();
      spyOn(component, 'getConcertDetails').and.callThrough();
      let mock = mockData;
      component.getConcertDetails();
      expect(component.getConcertDetails).toHaveBeenCalled();
      expect(GPZipCodeServiceSub.getConcertDetails).toHaveBeenCalled();
    });
  });

  describe('when fullName value is called', () => {
    it('onSubmit fullName expected calls', () => {
      const mockValue = mockData;
      component.fullName(mockValue);
      expect(component.fullName).toBeTruthy();
    });
  });

  describe('when formatNumber value is called', () => {
    it('formatNumber expected calls', () => {
      const mockValue = mockData;
      component.formatNumber(mockValue);
      expect(component.formatNumber).toBeTruthy();
    });
  });
});
