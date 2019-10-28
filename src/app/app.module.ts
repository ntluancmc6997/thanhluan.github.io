import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service'
import { User } from 'src/app/models/user.model'
import { RouterModule, Routes } from '@angular/router';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { OutputinputComponent } from './outputinput/outputinput.component';
const appRoutes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'checkLogin', component: DashbroadComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbroadComponent,
    OutputinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [LoginService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
