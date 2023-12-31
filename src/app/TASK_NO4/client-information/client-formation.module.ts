import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInformationComponent } from './client-information.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { metaReducers, reducers } from './store/store';
import { StoreModule } from '@ngrx/store';
import { ProgramManagementDetailsComponent } from './program-management/program-management-details/program-management-details.component';

@NgModule({
  declarations: [ClientInformationComponent, ProgramManagementDetailsComponent],

  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  exports: [ProgramManagementDetailsComponent],
})
export class ClientFormationModule {}
