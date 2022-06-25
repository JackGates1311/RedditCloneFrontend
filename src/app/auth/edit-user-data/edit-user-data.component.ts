import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EditUserDataRequestPayload} from "./editUserDataRequestPayload";
import {UserModel} from "../../shared/user/userModel";
import {UserService} from "../../shared/user/userService";
import {ActivatedRoute, Router} from "@angular/router";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.scss']
})

export class EditUserDataComponent implements OnInit {

  user: UserModel = new UserModel();

  editUserDataForm: FormGroup;
  editUserDataRequestPayload: EditUserDataRequestPayload;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
              private refreshService: RefreshService, private _location: Location) {

    this.editUserDataRequestPayload = {

      userUsername: '',
      userEmail: '',
      userAvatar: '',
      userDisplayName: '',
      userDescription: '',
      userKarma: 0

    };

  }

  ngOnInit(): void {

    this.editUserDataForm = new FormGroup({

      userUsername: new FormControl(''),
      userEmail: new FormControl(''),
      userAvatar: new FormControl(''),
      userDescription: new FormControl('', Validators.required),
      userDisplayName: new FormControl('', Validators.required)

    });

    this.userService.getAccountInfo().subscribe(user => {

      this.user = user;

      this.editUserDataForm.patchValue({

        'userUsername': this.user.username,
        'userEmail': this.user.email

      });

    });

  }

  editUserData() {


  }

}
