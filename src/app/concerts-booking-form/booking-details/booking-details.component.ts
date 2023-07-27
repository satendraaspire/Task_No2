import { Component, OnInit } from '@angular/core';
import { ConcertBookingService } from 'src/app/_service/concert-booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  public concertDetails!: any;
  public isAvailable!: boolean;

  constructor(private service: ConcertBookingService) {}

  public ngOnInit(): void {
    this.getConcertDetails();
  }

  public getConcertDetails() {
    this.service.getConcertDetails().subscribe((res) => {
      this.concertDetails = res;
      let isPresent = this.concertDetails.some(function (value: {
        id: number;
      }) {
        return value.id === 1;
      });
      if (!isPresent) {
        this.isAvailable = false;
      } else {
        this.isAvailable = true;
      }
    });
  }

  public fullName(value: any) {
    return `${value.firstName} ${value.lastName}`;
  }

  public formatNumber(value: any) {
    const formatvalue = value.phoneNumber.toString().replace(/\D[^\.]/g, '');
    const firstFiveDigit = formatvalue.slice(0, 5);
    const lastDigit = formatvalue.slice(4);
    return `+91 ${firstFiveDigit}-${lastDigit}`;
  }
}
