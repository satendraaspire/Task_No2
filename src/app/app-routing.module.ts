import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './concerts-booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientInformationComponent } from './TASK_NO3/client-information/client-information.component';
import { ClientManagementComponent } from './TASK_NO3/client-information/client-management/client-management.component';
import { ProgramManagementComponent } from './TASK_NO3/client-information/program-management/program-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concert-booking-form',
    pathMatch: 'full',
  },
  {
    path: 'concert-booking-form',
    component: BookingFormComponent,
    title: 'Form Booking',
  },
  {
    path: 'client-information',
    component: ClientInformationComponent,
    title: 'client-onformation',
  },
  {
    path:'client-management',
    component: ClientManagementComponent,
    title:'Client Management'
  },
  {
    path:'program-management',
    component: ProgramManagementComponent,
    title:'Program Management'
  },

  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
