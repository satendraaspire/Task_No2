import { Injectable } from '@angular/core';
import { ClientInformationType } from '../_service/client-information-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ReusableService {
  public programData!: ClientInformationType[];

  public setProgramData(data: ClientInformationType[]) {
    this.programData = data;
  }

  public getProgramData() {
    return this.programData;
  }
}
