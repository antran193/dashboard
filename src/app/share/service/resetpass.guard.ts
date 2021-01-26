import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResetpassService } from './resetpass.service';

@Injectable({
  providedIn: 'root'
})
export class ResetpassGuard implements CanActivate {
  constructor(
    private router: Router,
    private resetpasssevice: ResetpassService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    debugger;
    const user = this.resetpasssevice.uservaluerest;
    if (user) {
      console.log(user);
      return true
    }
    else {
      this.router.navigate(['/forgetpassword'], { queryParams: { returnUrl: state.url } });
      return false;
      
    }
  }
}
