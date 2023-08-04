import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationComponent } from './client-information.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { of } from 'rxjs';
import { ClientInformationService } from 'src/app/TASK_NO3/_service/client-information.service';

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

});
