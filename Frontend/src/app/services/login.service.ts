import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { user, role } from '../interfaces/login';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router, private jwtHelper : JwtHelperService) { }
  datauser : user[] | any;
  userRole : role[] | any;

  async login(credentials: user){
    return this.http.post(`${this.URL_API}/user/login`, credentials).pipe(
    map((resp: any) => 
    {
      const { token } = resp['data'];
      localStorage.setItem('user_token',token);
      const { role } =  this.jwtHelper.decodeToken(token);
      this.userRole = role;
      console.log(role);
      if(role == 'ADMIN'){
      this.router.navigate(['adminhome']);
      }else if(role == 'CLIENT'){
      this.router.navigate(['clienthome']);
      }
      
    }
    ));
  }

  isAuth():boolean{
    const token = localStorage.getItem('user_token') || undefined;
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('user_token')){
      return false;
    }
    return true;
  }
}
