import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginsvc:LoginService, private router: Router){}
  canActivate():boolean{
    if(!this.loginsvc.isAuth()){
      console.log('Token no es valido o ya expiro');
      this.router.navigate(['login']);
      return false;
    }
     return true;
    }
  
}
