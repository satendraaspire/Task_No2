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
import { of } from 'rxjs';

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

  describe('when getConcertDetails is called', () => {
    it(`getConcertDetails has default value`, () => {
      const mockDataValue: any = mockData;
      const restService = TestBed.inject(ConcertBookingService);
      spyOn(restService, 'getConcertDetails').and.returnValue(
        of(mockDataValue)
      );
      component.getConcertDetails();
      expect(component.getConcertDetails).toBeTruthy();
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
      const mockFormatData = {
        firstName: 'satendra',
        lastName: 'singh',
        email: 'sam@gmail.com',
        phoneNumber: 99975 - 35597,
        tickets: 6,
      };
      component.formatNumber(mockFormatData);
      expect(component.formatNumber).toBeTruthy();
    });
  });
});
