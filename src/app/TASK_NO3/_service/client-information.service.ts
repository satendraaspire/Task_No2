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

  public createClients(
    data: ClientInformationType
  ): Observable<ClientInformationType[]> {
    return this.http.post<ClientInformationType[]>(
      `${concertAPI}clients`,
      data
    );
  }

  public getClients(): Observable<ClientInformationType[]> {
    return this.http.get<ClientInformationType[]>(`${concertAPI}clients`);
  }

  public createProgram(
    data: ClientInformationType
  ): Observable<ClientInformationType[]> {
    return this.http.post<ClientInformationType[]>(
      `${concertAPI}programs`,
      data
    );
  }

  public getClientsProgram(): Observable<ClientInformationType[]> {
    return this.http.get<ClientInformationType[]>(`${concertAPI}programs`);
  }

  public createLinkedProgram(
    data: LinkedProgramType
  ): Observable<LinkedProgramType[]> {
    return this.http.post<LinkedProgramType[]>(
      `${concertAPI}clientLinkedPrograms`,
      data
    );
  }
  public getLinkedProgram(): Observable<LinkedProgramType[]> {
    return this.http.get<LinkedProgramType[]>(
      `${concertAPI}clientLinkedPrograms`
    );
  }

  public createClientDetails(
    data: ClientDetailsType
  ): Observable<ClientDetailsType[]> {
    return this.http.post<ClientDetailsType[]>(
      `${concertAPI}clientDetails`,
      data
    );
  }

  public getClientDetails(): Observable<ClientDetailsType[]> {
    return this.http.get<ClientDetailsType[]>(`${concertAPI}clientDetails`);
  }
}
