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
        Validators.pattern('^[1-9][0-9]*$'),
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

  public getInputNumber(event: any) {
    let value = event.target.value;
    if (value != null) {
      let phoneNumberValue = value.split('').map((number: any) => {
        return number;
      });
      if (phoneNumberValue.length == tickets.midLength) {
        phoneNumberValue.push('-');
        const updatedValue = phoneNumberValue.toString().replaceAll(',', '');
        this.concertBookingForm.patchValue({
          phoneNumber: updatedValue,
        });
      }

      if (phoneNumberValue.length >= tickets.lastLength) {
        let newValue = phoneNumberValue.slice(
          tickets.initialValue,
          tickets.rangeValue
        );
        const maxValue = newValue.toString().replaceAll(',', '');
        this.concertBookingForm.patchValue({
          phoneNumber: maxValue,
        });
      }
    }
  }

  public getTicketsValue(value: number) {
    if (value != null) {
      let ticketValue = String(value)
        .split('')
        .map((num: any) => {
          return num;
        });

      const initialItem = value.toString().charAt(tickets.initialValue);
      if (ticketValue.length > 2 && initialItem == tickets.initialNumber) {
        ticketValue.pop();
        const value = ticketValue.toString().replace(',', '');
        this.concertBookingForm.patchValue({
          tickets: value,
        });
      }

      if (value > this.totalTickets) {
        ticketValue.pop();
        const value = ticketValue.toString().replace(',', '');
        this.concertBookingForm.patchValue({
          tickets: value,
        });
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

      if (ticketValue.length >= tickets.inputValue) {
        ticketValue.pop();
        const value = ticketValue.toString().replace(',', '');
        this.concertBookingForm.patchValue({
          tickets: value,
        });
      }
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
    if (this.totalTickets === tickets.initialValue) {
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
