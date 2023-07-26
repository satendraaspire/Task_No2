import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ConcertBookingService } from '../_service/concert-booking.service';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  concertBookingForm!: FormGroup;
  isSubmitted = false;
  totalTickets = 50;

  @ViewChild('viewBookingDetails') viewBookingDetails!: BookingDetailsComponent;

  constructor(
    private toastr: ToastrService,
    private service: ConcertBookingService
  ) {}

  ngOnInit(): void {
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
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.maxLength(10),
      ]),
      tickets: new FormControl(1, [Validators.required]),
    });

    this.setTicketsValue();

  }

  setTicketsValue(){

    if (
      JSON.parse(`${sessionStorage.getItem('totalTicketsLeft')}`) === null ||
      undefined
    ) {
      this.totalTickets = 50;
    } else {
      this.totalTickets = JSON.parse(
        `${sessionStorage.getItem('totalTicketsLeft')}`
      );
    }
  }

  get f() {
    return this.concertBookingForm['controls'];
  }

  increment() {
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
  decrement() {
    let countValue = this.concertBookingForm.get('tickets')?.value;
    if (countValue === 1) {
      this.toastr.info('Minimun One Ticket Required');
    } else {
      countValue--;
      this.concertBookingForm.patchValue({
        tickets: countValue,
      });
    }
  }

  onSubmit() {
    if (this.totalTickets === 0) {
      this.toastr.info('All seats are booked');
    } else if (!this.concertBookingForm.valid) {
      this.isSubmitted = true;
      this.toastr.error('Invalid Form');
    } else {
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

  storingValueInSession(value: number) {
    const totalTicketsLeft = this.totalTickets - value;
    sessionStorage.setItem(
      'totalTicketsLeft',
      JSON.stringify(totalTicketsLeft)
    );
    
    this.setTicketsValue();
  }
  restoringForm() {
    this.viewBookingDetails?.getConcertDetails();
    this.concertBookingForm.reset();
    this.concertBookingForm.patchValue({
      tickets: 1,
    });
  }
}
