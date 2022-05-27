import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterRequestPayload} from "./registerRequestPayload";
import {AuthService} from "../service/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerRequestPayload: RegisterRequestPayload;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

    this.registerRequestPayload = {

      username: '',
      password: '',
      email: '',
      avatar: '',
      description : '',
      displayName : ''

    }

  }


  ngOnInit(): void {

    this.registerForm = new FormGroup({

      username: new FormControl('', Validators.required),
      userPassword: new FormControl('', Validators.required),
      userPasswordRepeated: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userAvatar: new FormControl(''),
      userDescription: new FormControl('', Validators.required),
      userDisplayName: new FormControl('', Validators.required)

    })

  }

  register(): void {

    this.registerRequestPayload.username = this.registerForm.get('username').value;
    this.registerRequestPayload.password = this.registerForm.get('userPassword').value;
    this.registerRequestPayload.email = this.registerForm.get('userEmail').value;
    this.registerRequestPayload.avatar = this.registerForm.get('userAvatar').value;
    this.registerRequestPayload.description = this.registerForm.get('userDescription').value;
    this.registerRequestPayload.displayName = this.registerForm.get('userDisplayName').value;

    this.authService.register(

        this.registerRequestPayload).subscribe(data => {

          console.log(data);
          alert(data);

          this.router.navigate(['/']); // here you will need to change to login redirect

        }, error => {

          alert("User registration failed because of database error");
    });

  }
}
