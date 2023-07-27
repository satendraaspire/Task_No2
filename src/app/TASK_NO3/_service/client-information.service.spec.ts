import { TestBed } from '@angular/core/testing';

import { ClientInformationService } from './client-information.service';
import { MockService } from 'ng-mocks';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('ClientInformationService', () => {
  let service: ClientInformationService;

  beforeEach(() => {
    const mockServiceSub = () => ({
      get: (_defaultPolicies: any, _array: any) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        HttpClientModule,
        BrowserModule,
        ClientInformationService,
        { provide: MockService, useFactory: mockServiceSub },
      ],
    });
    service = TestBed.inject(ClientInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when calls getClients', () => {
    it('should calls getClients.get', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getClients').and.callThrough();
      service.getClients();
      expect(service.getClients).toHaveBeenCalled();
    });
  });

  describe('when calls getClientsProgram', () => {
    it('should calls getClientsProgram.get', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getClientsProgram').and.callThrough();
      service.getClientsProgram();
      expect(service.getClientsProgram).toHaveBeenCalled();
    });
  });

  describe('when calls getLinkedProgram', () => {
    it('should calls getLinkedProgram.get', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getLinkedProgram').and.callThrough();
      service.getLinkedProgram();
      expect(service.getLinkedProgram).toHaveBeenCalled();
    });
  });

  describe('when calls getClientDetails', () => {
    it('should calls getClientDetails.get', () => {
      const mockServiceSub = TestBed.inject(MockService);
      spyOn(mockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getClientDetails').and.callThrough();
      service.getClientDetails();
      expect(service.getClientDetails).toHaveBeenCalled();
    });
  });
});
