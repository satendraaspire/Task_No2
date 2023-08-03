import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { tickets } from 'src/app/concerts-booking-form/concert-booking.constant';
import {
  ClientInformationType,
  LinkedProgramType,
} from '../../client-information.interface';
import { combineLatest } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProgramDialogComponent } from '../program-dialog/program-dialog.component';
import { Dialog_Data_Type } from '../program-dialog/program-dialog.constant';

@Component({
  selector: 'app-programs-managements-details',
  templateUrl: './program-management-details.component.html',
  styleUrls: ['./program-management-details.component.css'],
})
export class ProgramManagementSevenDetailsComponent
  implements OnInit, AfterViewInit
{
  public programDetails!: ClientInformationType[];
  public ticketsValues = tickets;
  public linkedProgram!: LinkedProgramType[];

  public dataSource = new MatTableDataSource();
  public displayedColumns!: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store<{
      linkedProgramData: LinkedProgramType[];
      programData: ClientInformationType[];
    }>,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.getProgramDetails();
    this.customtableData();
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public openProgramDialog(details: any) {
    this.dialog.open(ProgramDialogComponent, {
      height: `${Dialog_Data_Type.height}px`,
      width: `${Dialog_Data_Type.width}px`,
      data: {
        buttonText: {
          cancel: Dialog_Data_Type.closeButtonText,
        },
        linkedClient: details,
      },
    });
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

  public customtableData() {
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
    this.dataSource.data = clientCombinedArrays;
  }
}
