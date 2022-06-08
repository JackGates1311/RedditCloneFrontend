import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {AuthService} from "../auth/service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public localStorage: LocalStorageService, public authService: AuthService) { }

  ngOnInit(): void {

    //TODO Fix glitch with navbar in mobile mode (problem with hiding after selecting item 'ex. login' with routerLink instead of href...)

  }

  logout(): void {

    this.authService.logout();

    this.ngOnInit();

  }
}
