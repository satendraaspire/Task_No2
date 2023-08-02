import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Toastr imports
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing imports
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Reactive form imports
import { ReactiveFormsModule } from '@angular/forms';

// HTTP client import
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookingFormComponent } from './concerts-booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcertBookingService } from './_service/concert-booking.service';
import { BookingDetailsComponent } from './concerts-booking-form/booking-details/booking-details.component';
import { MaskNumberDirective } from './_directive/mask-number.directive';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClientFormationModule } from './TASK_NO4/client-information/client-formation.module';
import { ClientManagementComponent } from './TASK_NO4/client-information/client-management/client-management.component';
import { ProgramManagementComponent } from './TASK_NO4/client-information/program-management/program-management.component';
import { ClientFormationFirstModule } from './TASK_NO3/client-information/client-formation.module';
import { ClientManagementFirstComponent } from './TASK_NO3/client-information/client-management/client-management.component';
import { ProgramManagementFirstComponent } from './TASK_NO3/client-information/program-management/program-management.component';
import { ClientFormationSecondModule } from './TASK_NO6/client-information/client-formation.module';
import { ClientManagementSecondComponent } from './TASK_NO6/client-information/client-management/client-management.component';
import { ProgramManagementSecondComponent } from './TASK_NO6/client-information/program-management/program-management.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    PageNotFoundComponent,
    BookingDetailsComponent,
    MaskNumberDirective,
    ClientManagementComponent,
    ProgramManagementComponent,
    ClientManagementFirstComponent,
    ProgramManagementFirstComponent,
    ClientManagementSecondComponent,
    ProgramManagementSecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientFormationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ClientFormationFirstModule,
    ClientFormationSecondModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [ConcertBookingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
