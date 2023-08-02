import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ReusableServices } from '../_reusable-service/reusable.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TenantGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userData = sessionStorage.getItem('isValid')!

    if (
      (userData === 'tenant' &&
      state.url.includes('/clients') || userData === 'admin'  )
    ) {
      return true;
    } else {
      this.router.navigate(['/clients-informations'])
      this.toastr.info('Permission Denied');
      return false;
    }
  }
}
