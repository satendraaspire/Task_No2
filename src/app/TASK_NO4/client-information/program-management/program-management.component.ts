import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProgramManagementDetailsComponent } from './program-management-details/program-management-details.component';
import { Store } from '@ngrx/store';
import { setProgramDetailsData } from '../store/actions/program-management.actions';
import { random } from 'src/app/concerts-booking-form/concert-booking.constant';
import { ClientInformationType } from '../client-information.interface';

@Component({
  selector: 'app-program-management',
  templateUrl: './program-management.component.html',
  styleUrls: ['./program-management.component.css'],
})
export class ProgramManagementComponent implements OnInit {
  public programManagementForm!: FormGroup;

  @ViewChild('programDetails')
  programDetails!: ProgramManagementDetailsComponent;

  constructor(
    private toastr: ToastrService,
    private store: Store<{
      programData: ClientInformationType[];
    }>
  ) {}

  ngOnInit(): void {
    this.programManagementForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
    });
  }

  public get formControlsHandle() {
    return this.programManagementForm['controls'];
  }

  public onSubmit() {
    if (!this.programManagementForm.valid) {
      this.toastr.error('Invalid Form');
    } else {
      const autoID = Math.floor(random.value * Math.random());
      this.store.dispatch(
        setProgramDetailsData({
          id: autoID,
          name: this.programManagementForm.value.name,
        } as ClientInformationType)
      );
      this.toastr.success('Added Successfully');
      this.programManagementForm.reset();
    }
  }
}
