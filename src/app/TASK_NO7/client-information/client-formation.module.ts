import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInformationSevenComponent } from './client-information.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { metaReducers, reducers } from './store/store';
import { StoreModule } from '@ngrx/store';
import { ProgramManagementSevenDetailsComponent } from './program-management/program-management-details/program-management-details.component';
import { LoginFormSevenComponent } from './forms/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProgramDialogComponent } from './program-management/program-dialog/program-dialog.component';

@NgModule({
  declarations: [
    ClientInformationSevenComponent,
    ProgramManagementSevenDetailsComponent,
    LoginFormSevenComponent,
    ProgramDialogComponent,
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ProgramManagementSevenDetailsComponent,
    LoginFormSevenComponent,
    ProgramDialogComponent,
  ],
})
export class ClientFormationSevenModule {}
