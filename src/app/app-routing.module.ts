import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './concerts-booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientManagementComponent } from './TASK_NO4/client-information/client-management/client-management.component';
import { ClientInformationComponent } from './TASK_NO4/client-information/client-information.component';
import { ProgramManagementComponent } from './TASK_NO4/client-information/program-management/program-management.component';
import { ClientInformationFirstComponent } from './TASK_NO3/client-information/client-information.component';
import { ClientManagementFirstComponent } from './TASK_NO3/client-information/client-management/client-management.component';
import { ProgramManagementFirstComponent } from './TASK_NO3/client-information/program-management/program-management.component';
import { ClientInformationSecondComponent } from './TASK_NO6/client-information/client-information.component';
import { ClientManagementSecondComponent } from './TASK_NO6/client-information/client-management/client-management.component';
import { ProgramManagementSecondComponent } from './TASK_NO6/client-information/program-management/program-management.component';
import { AuthGuard } from './TASK_NO6/client-information/_service/guards/auth.guard';
import { TenantGuard } from './TASK_NO6/client-information/_service/guards/tenant.guard';
import { LoginGuard } from './TASK_NO6/client-information/_service/guards/login.guard';
import { ClientManagementSevenComponent } from './TASK_NO7/client-information/client-management/client-management.component';
import { ProgramManagementSevenComponent } from './TASK_NO7/client-information/program-management/program-management.component';
import { ClientInformationSevenComponent } from './TASK_NO7/client-information/client-information.component';
import { LoginFormSevenComponent } from './TASK_NO7/client-information/forms/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full',
  },
  {
    path: 'login-form',
    component: LoginFormSevenComponent,
    title: 'Login Form',
    canActivate: [LoginGuard],
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
    path: 'client-management',
    component: ClientManagementComponent,
    title: 'Client Management',
  },
  {
    path: 'program-management',
    component: ProgramManagementComponent,
    title: 'Program Management',
  },

  {
    path: 'client-informations',
    component: ClientInformationFirstComponent,
    title: 'client-onformations',
  },
  {
    path: 'client-managements',
    component: ClientManagementFirstComponent,
    title: 'Client Managements',
  },
  {
    path: 'program-managements',
    component: ProgramManagementFirstComponent,
    title: 'Program Managements',
  },

  {
    path: 'clients-informations',
    component: ClientInformationSecondComponent,
    title: 'client-onformations',
    canActivate: [AuthGuard],
  },
  {
    path: 'clients-managements',
    component: ClientManagementSecondComponent,
    title: 'Client Managements',
  },
  {
    path: 'programs-managements',
    component: ProgramManagementSecondComponent,
    title: 'Program Managements',
    canActivate: [TenantGuard],
  },

  {
    path: 'clients-informationss',
    component: ClientInformationSevenComponent,
    title: 'client-Ionformationss',
    canActivate: [AuthGuard],
  },
  {
    path: 'clients-managementss',
    component: ClientManagementSevenComponent,
    title: 'Client Managements',
  },
  {
    path: 'programs-managementss',
    component: ProgramManagementSevenComponent,
    title: 'Program Managements',
    canActivate: [TenantGuard],
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
