import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concertAPI } from 'src/app/_service/concert-booking.constant';
import { LoginType } from '../client-information.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public logAPI = concertAPI;

  constructor(private http: HttpClient) {}

  getRegisterUser(): Observable<LoginType[]> {
    return this.http.get<LoginType[]>(`${this.logAPI}registerClients`);
  }

  get userPermission() {
    const userData = sessionStorage.getItem('isValid');
    return userData;
  }
}
