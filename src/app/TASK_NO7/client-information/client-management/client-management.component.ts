import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DesignationValues } from '../client-information.constant';
import { Router } from '@angular/router';
import { random } from 'src/app/concerts-booking-form/concert-booking.constant';
import {
  setClientData,
  setClientDetails,
  setLinkedProgram,
} from '../store/actions/client-data.actions';
import { Store } from '@ngrx/store';
import {
  ClientDetailsType,
  ClientInformationType,
  LinkedProgramType,
} from '../client-information.interface';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementSevenComponent implements OnInit {
  public clientManagementForm!: FormGroup;
  public programDropDown!: ClientInformationType[];
  public designationValues = DesignationValues;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private store: Store<{
      clientData: ClientInformationType[];
      clientDetailsData: ClientDetailsType[];
      linkedProgramData: LinkedProgramType[];
      programData: ClientInformationType[];
    }>
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
    this.store
      .select((store) => store.programData)
      .subscribe((res) => {
        this.programDropDown = res;
      });
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
      this.router.navigate(['/clients-informationss']);
      this.clientManagementForm.reset();
    }
  }

  public createClient(autoId: number, clientName: string) {
    this.store.dispatch(
      setClientData({
        id: autoId,
        name: clientName,
      } as unknown as ClientInformationType)
    );
  }

  public createClientDetails(
    autoId: number,
    clientDesignation: string,
    clientDepartment: string
  ) {
    this.store.dispatch(
      setClientDetails({
        clientId: autoId,
        designation: clientDesignation,
        department: clientDepartment,
      } as unknown as ClientDetailsType)
    );
  }

  public createLinkedProgram(autoId: number, programsList: number[]) {
    [...programsList].map((res) => {
      this.store.dispatch(
        setLinkedProgram({
          clientId: autoId,
          programId: res,
        } as unknown as LinkedProgramType)
      );
    });
  }
}
