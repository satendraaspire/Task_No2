import { Component, OnInit } from '@angular/core';
import { ClientInformationService } from '../_service/client-information.service';
import { forkJoin } from 'rxjs';
import {
  ClientDetailsType,
  ClientInformationType,
  LinkedProgramType,
} from 'c:/PIP_Task/task_No2/src/app/TASK_NO3/_service/client-information-service.interface';
import { ReusableService } from '../_reusable-service/reusable-service.service';

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
    private clientService: ClientInformationService,
    private reusableService: ReusableService
  ) {}

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
        this.reusableService.setProgramData(this.clientProgram);
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
