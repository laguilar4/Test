import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private loginsvc:LoginService, public router:Router, private jwtHelper: JwtHelperService){}
  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data['expectedRole'];
    const user_token = localStorage.getItem('auth-token') || undefined;
    if(user_token == undefined || user_token == null){
      this.router.navigate(['login']);
      return false;
    }else{
      const { role } = this.jwtHelper.decodeToken(user_token);
    if( !this.loginsvc.isAuth() || role !== expectedRole){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  }
  
}
