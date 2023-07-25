import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingConcert } from './concert-booking.interface';
import { concertAPI } from './concert-booking.constant';

@Injectable({
  providedIn: 'root',
})
export class ConcertBookingService {
  concertAPI = concertAPI;

  constructor(private http: HttpClient) {}

  addBookingForConcert(data: BookingConcert): Observable<BookingConcert> {
    return this.http.post<BookingConcert>(`${concertAPI}`, data);
  }

  getConcertDetails(): Observable<BookingConcert> {
    return this.http.get<BookingConcert>(`${concertAPI}`);
  }
}
