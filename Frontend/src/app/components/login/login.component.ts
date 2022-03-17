import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private loginSVC: LoginService) { }

  ngOnInit(): void {
  }
  public loginForm = this.fb.group({
    email:[''],
    password:['']
  });

  async login(){
    (await this.loginSVC.login(this.loginForm.value)).subscribe(
      res =>
      {

      }, 
      err => 
      {

      });
  }

}
