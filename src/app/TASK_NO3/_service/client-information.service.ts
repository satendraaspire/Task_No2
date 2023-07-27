import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concertAPI } from 'src/app/_service/concert-booking.constant';
import {
  ClientDetailsType,
  ClientInformationType,
  LinkedProgramType,
} from './client-information-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientInformationService {
  public concertAPI = concertAPI;

  constructor(private http: HttpClient) {}

  public getClients(): Observable<ClientInformationType[]> {
    return this.http.get<ClientInformationType[]>(`${concertAPI}clients`);
  }

  public getClientsProgram(): Observable<ClientInformationType[]> {
    return this.http.get<ClientInformationType[]>(`${concertAPI}programs`);
  }

  public getLinkedProgram(): Observable<LinkedProgramType[]> {
    return this.http.get<LinkedProgramType[]>(
      `${concertAPI}clientLinkedPrograms`
    );
  }

  public getClientDetails(): Observable<ClientDetailsType[]> {
    return this.http.get<ClientDetailsType[]>(`${concertAPI}clientDetails`);
  }
}
