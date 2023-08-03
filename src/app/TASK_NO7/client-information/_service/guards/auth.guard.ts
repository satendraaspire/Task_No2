import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: ClientService) {}
  canActivate() {
    const value = this.service.userPermission;
    if (value) {
      return true;
    } else {
      this.router.navigate(['/login-form']);
      return false;
    }
  }
}
