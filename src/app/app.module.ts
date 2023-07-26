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
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { BookingFormComponent } from './concerts-booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcertBookingService } from './_service/concert-booking.service';
import { BookingDetailsComponent } from './concerts-booking-form/booking-details/booking-details.component';
import { MaskNumberDirective } from './_directive/mask-number.directive';



@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    PageNotFoundComponent,
    BookingDetailsComponent,
    MaskNumberDirective
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ConcertBookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
