import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { tickets } from 'src/app/concerts-booking-form/concert-booking.constant';
import {
  ClientInformationType,
  LinkedProgramType,
  ProgramCombinedArrays,
} from '../../client-information.interface';
import { combineLatest } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-program-managements-details',
  templateUrl: './program-management-details.component.html',
  styleUrls: ['./program-management-details.component.css'],
})
export class ProgramManagementSecondDetailsComponent
  implements OnInit, AfterViewInit
{
  public programDetails!: ClientInformationType[];
  public ticketsValues = tickets;
  public linkedProgram!: LinkedProgramType[];
  public displayedColumns!: string[];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store<{
      linkedProgramData: LinkedProgramType[];
      programData: ClientInformationType[];
    }>
  ) {}

  public ngOnInit(): void {
    this.getProgramDetails();
    this.customtableData();
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public getProgramDetails() {
    combineLatest([
      this.store.select('linkedProgramData'),
      this.store.select('programData'),
    ]).subscribe(([clientLinkedProgram, clientProgram]) => {
      this.linkedProgram = clientLinkedProgram;
      this.programDetails = clientProgram;
    });
  }

  customtableData() {
    const clientCombinedArrays: any[] = [];

    this.programDetails.map((res) => {
      let programListArray: number[] = [];
      this.linkedProgram.map((link) => {
        if (res.id === link.programId) programListArray.push(link.programId);
      });

      return clientCombinedArrays.push({
        id: res.id,
        name: res.name,
        linkedClient:
          programListArray.length === tickets.initialValue
            ? '-'
            : programListArray.length,
      });
    });

    this.displayedColumns = ['name', 'linkedClient'];
    this.dataSource = new MatTableDataSource<ProgramCombinedArrays>(
      clientCombinedArrays
    );
  }
}
