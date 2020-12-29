import { UserAuthService } from './../services/user-auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return this.userAuthService.isAuthenticated;
    if (this.userAuthService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
