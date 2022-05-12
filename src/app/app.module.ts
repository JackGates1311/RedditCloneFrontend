import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoScreenModule } from './pages/demo-screen/demo-screen.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
	declarations: [
		AppComponent,
  HeaderComponent,
],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DemoScreenModule,
],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
