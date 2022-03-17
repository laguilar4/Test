import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { user } from '../interfaces/login';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) { }
  datauser : user[] | any;

  async login(credentials: user){
    return this.http.post(`${this.URL_API}/user/login`, credentials).pipe(
    map((resp: any) => 
    {
      const { token } = resp['data'];
      console.log(token);
    }
    ));
  }
}
