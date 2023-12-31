import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientInformationService } from '../../_service/client-information.service';
import {
  ClientDetailsType,
  ClientInformationType,
} from '../../_service/client-information-service.interface';
import { ToastrService } from 'ngx-toastr';
import { DesignationValues } from '../client-information.constant';
import { Router } from '@angular/router';
import { ReusableService } from '../../_reusable-service/reusable-service.service';
import { random } from 'src/app/concerts-booking-form/concert-booking.constant';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementFirstComponent implements OnInit {
  public clientManagementForm!: FormGroup;
  public designationDropDown!: ClientDetailsType[];
  public programDropDown!: ClientInformationType[];

  public designationValues = DesignationValues;

  constructor(
    private service: ClientInformationService,
    private toastr: ToastrService,
    private router: Router,
    private reusableService: ReusableService
  ) {}

  public ngOnInit(): void {
    this.clientManagementForm = new FormGroup({
      clientName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      department: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      programs: new FormControl('', Validators.required),
    });

    this.clientDetails();
  }
  public clientDetails() {
    if (this.reusableService.getProgramData() === undefined) {
      this.service.getClientsProgram().subscribe((response) => {
        this.programDropDown = response;
      });
    } else {
      this.programDropDown = this.reusableService.getProgramData();
    }
  }

  public get formControlsHandle() {
    return this.clientManagementForm['controls'];
  }

  public onSubmit() {
    if (!this.clientManagementForm.valid) {
      this.toastr.error('Invalid Form');
    } else {
      const autoID = Math.floor(random.value * Math.random());
      const { clientName, department, designation, programs } =
        this.clientManagementForm.value;
      this.createClient(autoID, clientName);
      this.createClientDetails(autoID, designation, department);
      this.createLinkedProgram(autoID, programs);
      this.toastr.success('Submit Successfully');
      this.router.navigate(['/client-informations']);
      this.clientManagementForm.reset();
    }
  }

  public createClient(autoId: number, clientName: string) {
    const data = {
      id: autoId,
      name: clientName,
    };
    this.service.createClients(data).subscribe();
  }

  public createClientDetails(
    autoId: number,
    clientDesignation: string,
    clientDepartment: string
  ) {
    const data = {
      clientId: autoId,
      designation: clientDesignation,
      department: clientDepartment,
    };
    this.service.createClientDetails(data).subscribe();
  }

  public createLinkedProgram(autoId: number, programsList: number[]) {
    [...programsList].map((res) => {
      const data = {
        clientId: autoId,
        programId: res,
      };
      this.service.createLinkedProgram(data).subscribe();
      return;
    });
  }
}
