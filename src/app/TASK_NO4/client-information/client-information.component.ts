import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  ClientInformationType,
  LinkedProgramType,
  ClientDetailsType,
} from './client-information.interface';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css'],
})
export class ClientInformationComponent implements OnInit {
  public clientsList!: ClientInformationType[];
  public clientProgram!: ClientInformationType[];
  public clientLinkedProgram!: LinkedProgramType[];
  public clientDetails!: ClientDetailsType[];

  constructor(
    private store: Store<{
      clientData: ClientInformationType[];
      clientDetailsData: ClientDetailsType[];
      linkedProgramData: LinkedProgramType[];
      programData: ClientInformationType[];
    }>
  ) {}

  public ngOnInit(): void {
    this.getClientsInformation();
  }

  public getClientsInformation() {
    combineLatest([
      this.store.select('clientData'),
      this.store.select('clientDetailsData'),
      this.store.select('linkedProgramData'),
      this.store.select('programData'),
    ]).subscribe(
      ([clientsList, clientLinkedProgram, clientDetails, clientProgram]) => {
        this.clientsList = clientsList;
        this.clientLinkedProgram = clientDetails;
        this.clientDetails = clientLinkedProgram;
        this.clientProgram = clientProgram;
      }
    );
  }

  public getDesignation(id: number) {
    const seletedValue = this.clientDetails.find(
      (value) => value.clientId === id
    );
    return seletedValue?.designation;
  }

  public getDepartment(id: number) {
    const seletedValue = this.clientDetails.find(
      (value) => value.clientId === id
    );
    return seletedValue?.department;
  }

  public getLinkedPrograms(id: string | number) {
    let programListArray: string[] = [];
    this.clientLinkedProgram.map((item) => {
      if (item.clientId === id) {
        this.clientProgram.find((value) => {
          if (item.programId === value.id) {
            return programListArray.push(value.name);
          } else {
            return;
          }
        });
      }
    });
    return programListArray.join('\n');
  }

  public getColorStyle(id: number) {
    return this.getLinkedPrograms(id)! ? 'gray' : 'red';
  }
}
