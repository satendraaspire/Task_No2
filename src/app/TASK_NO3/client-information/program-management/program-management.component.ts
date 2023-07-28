import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientInformationService } from '../../_service/client-information.service';
import { ProgramManagementDetailsComponent } from './program-management-details/program-management-details.component';

@Component({
  selector: 'app-program-management',
  templateUrl: './program-management.component.html',
  styleUrls: ['./program-management.component.css'],
})
export class ProgramManagementComponent implements OnInit {
  public programManagementForm!: FormGroup;
  public isSubmitted = false;

  @ViewChild('programDetails')
  programDetails!: ProgramManagementDetailsComponent;

  constructor(
    private toastr: ToastrService,
    private service: ClientInformationService
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
      this.isSubmitted = true;
      this.toastr.error('Invalid Form');
    } else {
      this.isSubmitted = false;
      this.service
        .createProgram({ ...this.programManagementForm.value })
        .subscribe(() => {
          this.programDetails.getProgramDetails();
          this.toastr.success('Program Added');
          this.programManagementForm.reset();
        });
    }
  }
}
