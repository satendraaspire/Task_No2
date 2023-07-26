import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';
import { ConcertBookingService } from '../_service/concert-booking.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    const ConcertBookingServiceSub = () => ({
      addBookingForConcert: (_data: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getConcertDetails: (_req: any, _interactionId: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    const toastrServiceStub = () => ({
      success: () => {},
      error: () => {},
      info: () => {},
      warning: () => {},
    });

    await TestBed.configureTestingModule({
      declarations: [BookingFormComponent,BookingDetailsComponent],
      imports: [
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
        { provide: ToastrService, useFactory: toastrServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('should call OnInit', () => {
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when setTicketsValue value is called', () => {
    it('setTicketsValue makes expected calls', () => {
      component.setTicketsValue()
      expect(component.setTicketsValue).toBeTruthy();
    });
  });

  describe('when getTicketsValue value is called', () => {
    it('getTicketsValue makes expected calls', () => {
      component.getTicketsValue(1)
      expect(component.getTicketsValue).toBeTruthy();
    });
  });

  describe('when increment value is called', () => {
    it('increment makes expected calls', () => {

      component.increment()
      expect(component.increment).toBeTruthy();
    });
  });

  describe('when onSubmit value is called', () => {
    it('onSubmit makes expected calls', () => {
      component.onSubmit()
      expect(component.onSubmit).toBeTruthy();
    });
  });








});
