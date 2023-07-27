import { Component, OnInit } from '@angular/core';
import { ClientInformationService } from '../_service/client-information.service';
import { forkJoin } from 'rxjs';
import {
  ClientDetailsType,
  ClientInformationType,
  LinkedProgramType,
} from 'c:/PIP_Task/task_No2/src/app/TASK_NO3/_service/client-information-service.interface';

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
  public isValid = false;

  constructor(private clientService: ClientInformationService) {}

  public ngOnInit(): void {
    this.getClientsInformation();
  }

  public getClientsInformation() {
    forkJoin([
      this.clientService.getClients(),
      this.clientService.getClientsProgram(),
      this.clientService.getLinkedProgram(),
      this.clientService.getClientDetails(),
    ]).subscribe(
      ([clientsList, clientProgram, clientLinkedProgram, clientDetails]) => {
        this.clientsList = clientsList;
        this.clientProgram = clientProgram;
        this.clientLinkedProgram = clientLinkedProgram;
        this.clientDetails = clientDetails;
      }
    );
  }

  public getDesignation(id: number | string) {
    const seletedValue = this.clientDetails.find(
      (value) => value.clientId == id
    );
    return seletedValue?.designation;
  }

  public getDepartment(id: number | string) {
    const seletedValue = this.clientDetails.find(
      (value) => value.clientId == id
    );
    return seletedValue?.department;
  }

  public getLinkedPrograms(id: string | number) {
    let programListArray = [];
    for (const element of this.clientLinkedProgram) {
      if (element.clientId == id) {
        programListArray.push('ProgramId' + element.programId);
      }
    }
    return programListArray.join('\n');
  }
}
