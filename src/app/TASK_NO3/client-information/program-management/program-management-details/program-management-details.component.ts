import { Component, OnInit } from '@angular/core';
import { ReusableService } from 'src/app/TASK_NO3/_reusable-service/reusable-service.service';
import { ClientInformationType } from 'src/app/TASK_NO3/_service/client-information-service.interface';
import { ClientInformationService } from 'src/app/TASK_NO3/_service/client-information.service';
import { tickets } from 'src/app/concerts-booking-form/concert-booking.constant';

@Component({
  selector: 'app-program-management-detail',
  templateUrl: './program-management-details.component.html',
  styleUrls: ['./program-management-details.component.css'],
})
export class ProgramManagementFirstDetailComponent implements OnInit {
  public programDetails!: ClientInformationType[];
  public ticketsValues = tickets;

  constructor(
    private service: ClientInformationService,
    public reusableService: ReusableService
  ) {}

  public ngOnInit(): void {
    this.getProgramDetails();
  }

  public getProgramDetails() {
    const getProgramDetails = this.reusableService.getProgramData();
    if (
      getProgramDetails === undefined ||
      getProgramDetails.length === this.ticketsValues.initialValue
    ) {
      this.service.getClientsProgram().subscribe((response) => {
        this.programDetails = response;
      });
    } else {
      this.programDetails = getProgramDetails;
    }
  }
}
