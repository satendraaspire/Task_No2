import { Component, OnInit } from '@angular/core';
import { ReusableService } from 'src/app/TASK_NO3/_reusable-service/reusable-service.service';
import { ClientInformationType } from 'src/app/TASK_NO3/_service/client-information-service.interface';
import { ClientInformationService } from 'src/app/TASK_NO3/_service/client-information.service';

@Component({
  selector: 'app-program-management-details',
  templateUrl: './program-management-details.component.html',
  styleUrls: ['./program-management-details.component.css'],
})
export class ProgramManagementDetailsComponent implements OnInit {
  public programDetails!: ClientInformationType[];

  constructor(
    private service: ClientInformationService,
    private reusableService: ReusableService
  ) {}

  public ngOnInit(): void {
    this.getProgramDetails();
  }

  public getProgramDetails() {
    if (this.reusableService.getProgramData() === undefined) {
      this.service.getClientsProgram().subscribe((response) => {
        this.programDetails = response;
      });
    } else {
      this.programDetails = this.reusableService.getProgramData();
    }
  }
}
