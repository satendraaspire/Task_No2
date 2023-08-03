import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { ClientService } from '../client.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private service: ClientService) {}
  canActivate() {
    const value = this.service.userPermission;
    if (value) {
      this.router.navigate(['/clients-informations']);
      return false;
    } else {
      return true;
    }
  }
}
