import { Component, OnInit } from '@angular/core';
import { ConcertBookingService } from 'src/app/_service/concert-booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  public concertDetails!: any;
  isAvailable!: boolean;

  constructor(public service: ConcertBookingService) {}
  ngOnInit(): void {
    this.getConcertDetails();
  }

  public getConcertDetails() {
    this.service.getConcertDetails().subscribe((res) => {
      this.concertDetails = res;
      let isPresent = this.concertDetails.some(function(el: { id: number; }){ return el.id === 1});
      if(!isPresent){
        this.isAvailable=false
      }
      else{
        this.isAvailable=true
      }
    });
  }

  public fullName(value: any) {
    return `${value.firstName} ${value.lastName}`;
  }

  public formatNumber(value: any) {
    const f_val = value.phoneNumber.toString().replace(/\D[^\.]/g, '');
    const firstFiveDigit = f_val.slice(0, 5);
    const lastDigit = f_val.slice(5);
    return `+91 ${firstFiveDigit}-${lastDigit}`;
  }
}
