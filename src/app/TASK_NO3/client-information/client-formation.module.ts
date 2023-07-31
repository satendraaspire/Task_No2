import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInformationFirstComponent } from './client-information.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProgramManagementFirstDetailComponent } from './program-management/program-management-details/program-management-details.component';

@NgModule({
  declarations: [ClientInformationFirstComponent, ProgramManagementFirstDetailComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule, RouterModule],
  exports: [ProgramManagementFirstDetailComponent],
})
export class ClientFormationFirstModule {}
