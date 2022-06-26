import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EditUserDataRequestPayload} from "./editUserDataRequestPayload";
import {UserModel} from "../../shared/user/userModel";
import {UserService} from "../../shared/user/userService";
import {ActivatedRoute, Router} from "@angular/router";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";
import {error} from "@angular/compiler/src/util";

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

      avatar: '',
      displayName: '',
      description: ''
    };

  }

  ngOnInit(): void {

    this.editUserDataForm = new FormGroup({

      userUsername: new FormControl(''),
      userEmail: new FormControl(''),
      userAvatar: new FormControl(''),
      userKarma: new FormControl(''),
      userDescription: new FormControl('', Validators.required),
      userDisplayName: new FormControl('', Validators.required)

    });

    this.userService.getAccountInfo().subscribe(user => {

      this.user = user;

      this.editUserDataForm.patchValue({

        'userUsername': this.user.username,
        'userEmail': this.user.email,
        'userKarma': this.user.karma,
        'userDisplayName': this.user.displayName,
        'userDescription': this.user.description

      });

    });

  }

  editUserData() {

    this.getDataFromFormGroup();

    this.userService.updateAccountInfo(this.editUserDataRequestPayload).subscribe(data => {

      this.refresh();

    }, error => {

      if(error.status === 403) {

        alert("You don't have permissions to edit data for this user");

      } else {

        alert("User data hasn't been successfully saved because of database error");

      }

    });


  }

  private getDataFromFormGroup() {

    this.editUserDataRequestPayload.avatar = "",
    this.editUserDataRequestPayload.displayName = this.editUserDataForm.get('userDisplayName').value;
    this.editUserDataRequestPayload.description = this.editUserDataForm.get('userDescription').value;

  }

  private refresh() {

    this.refreshService.setRefresh(true);
    this._location.back();

  }
}
