import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInformationSecondComponent } from './client-information.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { metaReducers, reducers } from './store/store';
import { StoreModule } from '@ngrx/store';
import { ProgramManagementSecondDetailsComponent } from './program-management/program-management-details/program-management-details.component';
import { LoginFormComponent } from './forms/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ClientInformationSecondComponent,
    ProgramManagementSecondDetailsComponent,
    LoginFormComponent,
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
    MatSortModule
  ],
  exports: [ProgramManagementSecondDetailsComponent,LoginFormComponent],
})
export class ClientFormationSecondModule {}
