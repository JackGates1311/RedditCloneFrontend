import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoScreenModule } from './pages/demo-screen/demo-screen.module';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/login/login.component';
import {LocalStorage, NgxWebstorageModule} from "ngx-webstorage";
import { HomeComponent } from './home/home.component';


@NgModule({
	declarations: [
		AppComponent,
  HeaderComponent,
  RegisterComponent,
  LoginComponent,
  HomeComponent,
],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DemoScreenModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxWebstorageModule.forRoot()
],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
