import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { createlist, getlist } from '../interfaces/todolist';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  url_api : string = 'http://localhost:3001/api/todo';

  constructor(private http: HttpClient) { }
  datalist : getlist[] | any;
  getUserToken = localStorage.getItem('auth-token');
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('auth-token', `${this.getUserToken}`);
  
  async createlist(datelist : createlist){
    return this.http.post(`${this.url_api}`, datelist, {headers : this.headers});
  }

  async readlist(){
    return this.http.get(`${this.url_api}`, {headers : this.headers}).pipe(
      map((resp:any ) => 
      {
        this.datalist = resp;
      }));
  }
}
