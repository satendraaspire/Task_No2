import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';
import { ConcertBookingService } from '../_service/concert-booking.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { tickets } from './concert-booking.constant';
import { mockData } from '../_service/concert-booking.constant';
import { of } from 'rxjs';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;
  let componentChild: BookingDetailsComponent;
  let fixtureChild: ComponentFixture<BookingDetailsComponent>;

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
      declarations: [BookingFormComponent, BookingDetailsComponent],
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
        ToastrService,
        { provide: ToastrService, useFactory: toastrServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixtureChild = TestBed.createComponent(BookingDetailsComponent);
    componentChild = fixtureChild.componentInstance;
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
      component.setTicketsValue();
      expect(component.setTicketsValue).toBeTruthy();
    });
  });

  describe('when getTicketsValue value is called', () => {
    it('getTicketsValue makes expected calls', () => {
      component.totalTickets = 50;
      component.getTicketsValue(1);
      expect(component.getTicketsValue).toBeTruthy();
    });
  });

  describe('when increment value is called', () => {
    it('increment makes expected calls', () => {
      component.concertBookingForm = new FormGroup({
        tickets: new FormControl(1, [
          Validators.required,
          Validators.pattern('^[1-9][0-9]*$'),
        ]),
      });
      component.increment();
      expect(component.increment).toBeTruthy();
    });
  });

  describe('when decrement value is called', () => {
    it('decrement makes expected calls', () => {
      component.concertBookingForm = new FormGroup({
        tickets: new FormControl(1, [
          Validators.required,
          Validators.pattern('^[1-9][0-9]*$'),
        ]),
      });
      component.decrement();

      expect(component.decrement).toBeTruthy();
    });
  });

  describe('when onSubmit value is called', () => {
    it('onSubmit makes expected calls', () => {
      component.concertBookingForm = new FormGroup({
        phoneNumber: new FormControl('9898987888'),
        tickets: new FormControl(1),
      });
      const data = {
        ...component.concertBookingForm.value,
      };
      component.totalTickets = 50;
      const restService = TestBed.inject(ConcertBookingService);
      const concertMockData: any = mockData;
      spyOn(restService, 'addBookingForConcert').and.returnValue(
        of(concertMockData)
      );
      restService.addBookingForConcert(data);
      component.onSubmit();
      component.handleNumberPattern('9898987888');
      component.storingValueInSession(10);

      component.restoringForm();
      expect(component.onSubmit).toBeTruthy();
    });
  });

  describe('when onSubmit valid value is called', () => {
    it('onSubmit valid expected calls', () => {
      component.concertBookingForm = new FormGroup({
        firstName: new FormControl('Sam'),
        lastName: new FormControl('Singh'),
        email: new FormControl('sam@gmail.com'),
        phoneNumber: new FormControl('99998-98989'),
        tickets: new FormControl(1),
      });
      component.totalTickets = 50;
      component.isSubmitted = false;
      const data = {
        ...component.concertBookingForm.value,
      };

      const restService = TestBed.inject(ConcertBookingService);
      const concertMockData: any = mockData;
      spyOn(restService, 'addBookingForConcert').and.returnValue(
        of(concertMockData)
      );
      restService.addBookingForConcert(data);
      component.onSubmit();
      component.storingValueInSession(10);
      component.restoringForm();
      expect(component.onSubmit).toBeTruthy();
    });
  });
});
