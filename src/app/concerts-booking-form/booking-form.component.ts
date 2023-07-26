import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ConcertBookingService } from '../_service/concert-booking.service';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { tickets } from './concert-booking.constant';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  public concertBookingForm!: FormGroup;
  public isSubmitted = false;
  public totalTickets!: number;
  public tickets = tickets;

  @ViewChild('viewBookingDetails') viewBookingDetails!: BookingDetailsComponent;

  constructor(
    private toastr: ToastrService,
    private service: ConcertBookingService
  ) {}

  public ngOnInit(): void {
    this.concertBookingForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9-]+'),
        Validators.maxLength(12),
        Validators.minLength(11),
      ]),
      tickets: new FormControl(1, [
        Validators.required,
        Validators.pattern('^[0-9]{1,2}?$'),
      ]),
    });

    this.setTicketsValue();
  }

  public setTicketsValue() {
    if (sessionStorage.getItem('totalTicketsLeft') === null || undefined) {
      this.totalTickets = tickets.totalValue;
    } else {
      this.totalTickets = JSON.parse(
        `${sessionStorage.getItem('totalTicketsLeft')}`
      );
    }
  }

  public get formControlsHandle() {
    return this.concertBookingForm['controls'];
  }

  getTicketsValue(value: number) {
    let ticketValue = String(value)
      .split('')
      .map((num) => {
        return Number(num);
      });

    if (value > this.totalTickets) {
      this.toastr.info(
        ` Your booking could not be completed because there are only ${this.totalTickets} available tickets left due to limited seat availability`
      );
    }

    if (value >= tickets.inputRange && tickets.lastLimit > value) {
      ticketValue.pop();
      const value = ticketValue.toString().replace(',', '');
      this.concertBookingForm.patchValue({
        tickets: value,
      });
    }

    if (
      value >= tickets.lastLimit &&
      ticketValue.length >= tickets.inputValue
    ) {
      ticketValue.pop();
      const value = ticketValue.toString().replace(',', '');
      this.concertBookingForm.patchValue({
        tickets: value,
      });
    }
  }

  public increment() {
    let countValue = this.concertBookingForm.get('tickets')?.value;

    if (countValue === this.totalTickets) {
      this.toastr.info(
        ` Your booking could not be completed because there are only ${this.totalTickets} available tickets left due to limited seat availability`
      );
    } else {
      countValue++;
      this.concertBookingForm.patchValue({
        tickets: countValue,
      });
    }
  }

  public decrement() {
    let countValue = this.concertBookingForm.get('tickets')?.value;
    if (countValue === tickets.countValue) {
      this.toastr.info('Minimun One Ticket Required');
    } else {
      countValue--;
      this.concertBookingForm.patchValue({
        tickets: countValue,
      });
    }
  }

  public onSubmit() {
    console.log(this.concertBookingForm);

    if (this.totalTickets === tickets.initialVaule) {
      this.toastr.info('All seats are booked');
    } else if (!this.concertBookingForm.valid) {
      this.isSubmitted = true;
      this.toastr.error('Invalid Form');
    } else {
      this.isSubmitted = false;
      const data = {
        ...this.concertBookingForm.value,
      };
      this.service.addBookingForConcert(data).subscribe((res) => {
        this.toastr.success('Booking Confirmed');
        this.storingValueInSession(this.concertBookingForm.value.tickets);
        this.restoringForm();
      });
    }
  }

  public storingValueInSession(value: number) {
    let totalTicketsLeft = this.totalTickets - value;
    sessionStorage.setItem('totalTicketsLeft', totalTicketsLeft.toString());
    this.setTicketsValue();
  }
  public restoringForm() {
    this.viewBookingDetails?.getConcertDetails();
    this.concertBookingForm.reset();
    this.concertBookingForm.patchValue({
      tickets: 1,
    });
  }
}
