import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationSevenComponent } from './client-information.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { combineLatest, of } from 'rxjs';
import { ClientInformationService } from 'src/app/TASK_NO3/_service/client-information.service';
import {
  clients,
  clientDetails,
  clientLinkedPrograms,
  programs,
} from 'src/app/TASK_NO3/client-information/client-information.constant';
import { Store } from '@ngrx/store';
import { ClientService } from './_service/client.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ClientFormationSevenModule } from './client-formation.module';

describe('ClientInformationSevenComponent', () => {
  let component: ClientInformationSevenComponent;
  let fixture: ComponentFixture<ClientInformationSevenComponent>;

  beforeEach(async () => {
    const ClientServiceSub = () => ({
      getRegisterUser: (_intakeId: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      userPermission: (_intakeId: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    const storeStub = () => ({
      select: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      incomingCall: {},
      dispatch: (_arg: any) => ({}),
    });

    await TestBed.configureTestingModule({
      declarations: [ClientInformationSevenComponent],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        HttpClientModule,
        BrowserModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        ClientFormationSevenModule,
        MatDialogModule,
        MatButtonModule,
        {
          provide: ClientService,
          useFactory: ClientServiceSub,
        },
        { provide: Store, useFactory: storeStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInformationSevenComponent);
    component = fixture.componentInstance;

    component.clientsList = clients;
    component.clientDetails = clientDetails;
    component.clientLinkedProgram = clientLinkedPrograms;
    component.clientProgram = programs;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when getClientsInformationslog is called', () => {
    it(`getClientsInformation has default value`, () => {
      const clientsListMock: any = clients;

      component.getClientsInformation();
      console.log('mycode', component.getClientsInformation());

      expect(component.clientsList).toEqual(clientsListMock);
    });
  });

  describe('when applyFilter is called', () => {
    it('makes applyFilter expected calls', () => {
      const event = { target: { value: 're' } };
      component.applyFilter(event);
      expect(component.applyFilter).toBeTruthy();
    });
  });
});
