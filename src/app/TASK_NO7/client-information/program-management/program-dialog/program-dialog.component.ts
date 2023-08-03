import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProgramDialogOptionsType } from './program-dialog.interface';
import { Store } from '@ngrx/store';
import {
  ClientInformationType,
  LinkedProgramType,
} from '../../client-information.interface';
import { combineLatest } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogRefSizeValues, DialogValues } from './program-dialog.constant';

@Component({
  selector: 'app-program-dialog',
  templateUrl: './program-dialog.component.html',
  styleUrls: ['./program-dialog.component.css'],
})
export class ProgramDialogComponent implements OnInit, AfterViewInit {
  public linkedProgram!: LinkedProgramType[];
  public clientsList!: ClientInformationType[];

  public dataSource = new MatTableDataSource();
  public displayedColumns!: string[];
  public dialogValues = DialogValues;
  public refSizeValues = DialogRefSizeValues;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store<{
      clientData: ClientInformationType[];
      linkedProgramData: LinkedProgramType[];
    }>,
    @Inject(MAT_DIALOG_DATA)
    public data: ProgramDialogOptionsType,
    public dialogRef: MatDialogRef<ProgramDialogComponent>
  ) {}

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public ngOnInit(): void {
    this.getClientLinedDetails();
    this.getClientLinedName();
  }

  public getClientLinedDetails() {
    combineLatest([
      this.store.select('clientData'),
      this.store.select('linkedProgramData'),
    ]).subscribe(([clientsList, clientLinkedProgram]) => {
      this.clientsList = clientsList;
      this.linkedProgram = clientLinkedProgram;
    });
  }

  public getClientLinedName() {
    let programListArray: { name: string }[] = [];
    this.linkedProgram
      .filter((link) => this.data.linkedClient.id === link.programId)
      .map((res) => {
        this.clientsList.map((repo) => {
          if (res.clientId === repo.id)
            programListArray.push({ name: repo.name });
        });
      });
    this.displayedColumns = ['no', 'name'];
    this.dataSource.data = programListArray;

    if (this.dataSource.data.length < this.dialogValues.lengthValue) {
      this.dialogRef.updateSize(
        `${this.refSizeValues.width}px`,
        `${this.refSizeValues.height}px`
      );
    }
  }
}
