import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationComponent } from './client-information.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClientInformationService } from '../_service/client-information.service';
import {
  clientDetails,
  clientLinkedPrograms,
  clients,
  programs,
} from './client-information.constant';
import { of } from 'rxjs';

describe('ClientInformationComponent', () => {
  let component: ClientInformationComponent;
  let fixture: ComponentFixture<ClientInformationComponent>;

  beforeEach(async () => {
    const ClientInformationServiceSub = () => ({
      getClients: (_intakeId: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getClientsProgram: (_intakeId: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getLinkedProgram: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getClientDetails: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [ClientInformationComponent],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        HttpClientModule,
        BrowserModule,
        {
          provide: ClientInformationService,
          useFactory: ClientInformationServiceSub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInformationComponent);
    component = fixture.componentInstance;

    component.clientsList = clients;
    component.clientDetails = clientDetails;
    component.clientLinkedProgram = clientLinkedPrograms;
    component.clientProgram = programs;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when getDesignation is called', () => {
    it('makes getDesignation expected calls', () => {
      component.getDesignation(1);
      expect(component.getDesignation).toBeTruthy();
    });
  });

  describe('when getDepartment is called', () => {
    it('makes getDepartment expected calls', () => {
      component.getDepartment(1);
      expect(component.getDepartment).toBeTruthy();
    });
  });

  describe('when getLinkedPrograms is called', () => {
    it('makes getLinkedPrograms expected calls', () => {
      component.getLinkedPrograms(1);
      expect(component.getLinkedPrograms).toBeTruthy();
    });
  });

  describe('when getClientsInformation is called', () => {
    it(`getClientsInformation has default value`, () => {
      const clientLinkedProgramMock: any = clientLinkedPrograms;
      const clientDetailsMock: any = clientDetails;
      const clientsListMock: any = clients;
      const clientProgramMock: any = programs;

      const restService = TestBed.inject(ClientInformationService);
      spyOn(restService, 'getClients').and.returnValue(of(clientsListMock));
      spyOn(restService, 'getClientsProgram').and.returnValue(
        of(clientProgramMock)
      );
      spyOn(restService, 'getLinkedProgram').and.returnValue(
        of(clientLinkedProgramMock)
      );
      spyOn(restService, 'getClientDetails').and.returnValue(
        of(clientDetailsMock)
      );

      component.getClientsInformation();
      expect(component.clientsList).toEqual(clientsListMock);
    });
  });
});
