import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isAuthenticated = false;

  constructor(private router: Router) {}

  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem('userAuthenticated', 'true');

    this.router.navigate(['home']);
  }

  logOut(): void {
    this.router.navigate(['login']);

    this.isAuthenticated = false;
    localStorage.setItem('userAuthenticated', 'true');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('userAuthenticated') === 'true') {
      return true;
    }
    return false;
  }
}
