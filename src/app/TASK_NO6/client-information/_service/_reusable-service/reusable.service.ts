import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReusableServices {
  public programData!: string;

  public setUserName(data: string) {
    this.programData = data;
  }

  public getUserName() {
    return this.programData;
  }
}
