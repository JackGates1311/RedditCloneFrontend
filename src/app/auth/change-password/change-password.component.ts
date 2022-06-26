import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangePasswordRequestPayload} from "./changePasswordRequestPayload";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";
import {UserService} from "../../shared/user/userService";
import {AuthService} from "../service/auth.service";

declare var $ : any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  changePasswordRequestPayload: ChangePasswordRequestPayload;

  constructor(private refreshService: RefreshService, private _location: Location, private userService: UserService,
              private authService: AuthService) {

    this.changePasswordRequestPayload = {

      oldPassword: '',
      newPassword: ''

    };

  }

  ngOnInit(): void {

    this.changePasswordForm = new FormGroup({

      userPassword: new FormControl('', Validators.required),
      userNewPassword: new FormControl('', Validators.required),
      userNewPasswordRepeated: new FormControl('', Validators.required)

    });

  }

  changePassword() {

    this.getDataFromGroup();

    this.userService.changePassword(this.changePasswordRequestPayload).subscribe(data => {

      this.refresh();

      $('#btnChangePassword').modal('hide');

      this.authService.logout();

    }, error => {

      if(error.status === 403) {

        alert("Please provide a valid old password");

      } else {

        alert("Password hasn't been successfully changed because of database error");

      }

    });

  }

  private getDataFromGroup() {

    this.changePasswordRequestPayload.oldPassword = this.changePasswordForm.get('userPassword').value;
    this.changePasswordRequestPayload.newPassword = this.changePasswordForm.get('userNewPassword').value;

  }

  private refresh() {

    this.refreshService.setRefresh(true);
    this._location.back();
  }
}
