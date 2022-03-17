import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { ClienthomeComponent } from './components/clienthome/clienthome.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    ClienthomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpinnerModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
