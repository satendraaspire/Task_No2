import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tickets } from 'src/app/concerts-booking-form/concert-booking.constant';
import { ClientInformationType } from '../../client-information.interface';

@Component({
  selector: 'app-program-management-details',
  templateUrl: './program-management-details.component.html',
  styleUrls: ['./program-management-details.component.css'],
})
export class ProgramManagementDetailsComponent implements OnInit {
  public programDetails!: ClientInformationType[];
  public ticketsValues = tickets;

  constructor(
    private store: Store<{
      programData: ClientInformationType[];
    }>
  ) {}

  public ngOnInit(): void {
    this.getProgramDetails();
  }

  public getProgramDetails() {
    this.store
      .select((store) => store.programData)
      .subscribe((res) => {
        this.programDetails = res;
      });
  }
}
