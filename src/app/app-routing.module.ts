import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './concerts-booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'concert-booking-form',
    pathMatch: 'full'
  },
  {
    path:'concert-booking-form',
    component: BookingFormComponent,
    title: 'Form Booking'
  },

  {
    path: '**',
    component:PageNotFoundComponent,
    title: 'Page Not Found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
