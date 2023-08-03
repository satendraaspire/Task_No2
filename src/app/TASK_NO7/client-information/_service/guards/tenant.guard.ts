import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TenantGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userData = sessionStorage.getItem('isValid')!;

    if (
      (userData === 'tenant' && state.url.includes('/clients')) ||
      userData === 'admin'
    ) {
      return true;
    } else {
      this.router.navigate(['/clients-informationss']);
      this.toastr.info('Permission Denied');
      return false;
    }
  }
}
