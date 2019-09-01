import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private _authService: AuthService,  private _router: Router) { }
    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        console.log('true')
        return true
      } else {
        console.log('false')
        this._router.navigate(['/auth/signin'])
        return false
      }
    }

}
