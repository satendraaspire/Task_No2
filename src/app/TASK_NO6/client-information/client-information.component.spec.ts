import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationSecondComponent } from './client-information.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { of } from 'rxjs';
import { ClientInformationService } from 'src/app/TASK_NO3/_service/client-information.service';
import { clients, clientDetails, clientLinkedPrograms, programs } from 'src/app/TASK_NO3/client-information/client-information.constant';

describe('ClientInformationSecondComponent', () => {
  let component: ClientInformationSecondComponent;
  let fixture: ComponentFixture<ClientInformationSecondComponent>;

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
      declarations: [ClientInformationSecondComponent],
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

    fixture = TestBed.createComponent(ClientInformationSecondComponent);
    component = fixture.componentInstance;

    component.clientsList = clients;
    component.clientDetails = clientDetails;
    component.clientLinkedProgram = clientLinkedPrograms;
    component.clientProgram = programs;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
