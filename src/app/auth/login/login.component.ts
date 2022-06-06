import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestPayload} from "./loginRequestPayload";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import $ from "jquery";
import {throwError} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  //successMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router,
              private localStorage: LocalStorageService) {

    this.loginRequestPayload = {

      username: '',
      password: ''
    };

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({

      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
  }

  login(): void {

    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {

      this.isError = false;
      this.router.navigate(['/']);

      $('#btnLogin').modal('hide');

      console.log("token: " + this.localStorage.retrieve('authToken'));

      }, error => {

      this.isError = true;
      alert("Login failed");


    });
  }
}
