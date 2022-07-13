import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { LoginComponent } from './login/login.component';
import { CandidatesTableComponent } from './candidates-table/candidates-table.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserRoutingModule } from './user/user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetemailComponent } from './forgetemail/forgetemail.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminUpdateComponent,
    LoginComponent,
    CandidatesTableComponent,
    HomeComponent,
    RegistrationComponent,
    ForgetemailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
