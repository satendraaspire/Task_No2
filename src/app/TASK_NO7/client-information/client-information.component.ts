import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  ClientInformationType,
  LinkedProgramType,
  ClientDetailsType,
} from './client-information.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ClientService } from './_service/client.service';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css'],
})
export class ClientInformationSevenComponent implements OnInit, AfterViewInit {
  public clientsList!: ClientInformationType[];
  public clientProgram!: ClientInformationType[];
  public clientLinkedProgram!: LinkedProgramType[];
  public clientDetails!: ClientDetailsType[];
  public userValue!: string;
  public dataSource = new MatTableDataSource();
  public displayedColumns!: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store<{
      clientData: ClientInformationType[];
      clientDetailsData: ClientDetailsType[];
      linkedProgramData: LinkedProgramType[];
      programData: ClientInformationType[];
    }>,
    private service: ClientService
  ) {}

  public ngOnInit(): void {
    this.getClientsInformation();
    this.getPermission();
    this.customtableData();
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getPermission() {
    this.userValue = this.service.userPermission!;
  }

  public getClientsInformation() {
    combineLatest([
      this.store.select('clientData'),
      this.store.select('programData'),
      this.store.select('linkedProgramData'),
      this.store.select('clientDetailsData'),
    ]).subscribe(
      ([clientsList, clientProgram, clientLinkedProgram, clientDetails]) => {
        this.clientsList = clientsList;
        this.clientProgram = clientProgram;
        this.clientLinkedProgram = clientLinkedProgram;
        this.clientDetails = clientDetails;
      }
    );
  }

  public customtableData() {
    const clientCombinedArray: any[] = [];
    this.clientsList.map((res) => {
      // getting client designation
      const seletedValue = this.clientDetails.find(
        (value) => value.clientId === res.id
      );

      // getting client department
      const seletedDepartmentValue = this.clientDetails.find(
        (value) => value.clientId === res.id
      );

      // getting client linkedPrgram
      let programListArray: string[] = [];
      this.clientLinkedProgram.map((item) => {
        if (item.clientId === res.id) {
          this.clientProgram.find((value) => {
            if (item.programId === value.id) programListArray.push(value.name);
          });
        }
      });

      return clientCombinedArray.push({
        id: res.id,
        name: res.name,
        designation: seletedValue?.designation,
        department: seletedDepartmentValue?.department,
        linkedPrgram: programListArray.join('\n'),
      });
    });

    this.displayedColumns = [
      'name',
      'designation',
      'department',
      'linkedPrgram',
    ];
    this.dataSource.data = clientCombinedArray;
  }

  public applyFilter(event: any) {
    const targetValue = event.target.value;
    const filterValues = targetValue.trim().toLowerCase();
    this.dataSource.filter = filterValues;
  }

  public getColorStyle(id: number) {
    let programListArray: string[] = [];
    this.clientLinkedProgram.map((item) => {
      if (item.clientId === id) {
        this.clientProgram.find((value) => {
          if (item.programId === value.id) programListArray.push(value.name);
        });
      }
    });
    return programListArray.join('\n');
  }
}
