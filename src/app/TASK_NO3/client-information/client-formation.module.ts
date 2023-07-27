import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInformationComponent } from './client-information.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ClientInformationComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule],
})
export class ClientFormationModule {}
