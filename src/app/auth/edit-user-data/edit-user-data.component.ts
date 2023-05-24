import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EditUserDataRequestPayload} from "./editUserDataRequestPayload";
import {UserModel} from "../../shared/user/userModel";
import {UserService} from "../../shared/user/userService";
import {ActivatedRoute, Router} from "@angular/router";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";
import {ImageService} from "../../shared/image/imageService";

@Component({
  selector: 'app-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.scss']
})

export class EditUserDataComponent implements OnInit {

  user: UserModel = new UserModel();

  editUserDataForm: FormGroup;
  editUserDataRequestPayload: EditUserDataRequestPayload;
  imagePathPlaceholder = "Change avatar";
  defaultAvatar = "assets/images/avatar.png";
  avatarFileName = "";

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
              private refreshService: RefreshService, private _location: Location, private imageService: ImageService) {

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

      if(user.avatar === "" || user.avatar === null){
        this.user.avatar = this.defaultAvatar;
      } else {
        this.avatarFileName = user.avatar;
        this.user.avatar = "http://localhost:8080/api/file/" + user.avatar;
      }

      this.editUserDataForm.patchValue({

        'userUsername': this.user.username,
        'userEmail': this.user.email,
        'userKarma': this.user.karma,
        'userDisplayName': this.user.displayName,
        'userDescription': this.user.description,
        'userAvatar': this.user.avatar

      });
    });

  }

  editUserData() {

    this.getDataFromFormGroup();

    this.userService.updateAccountInfo(this.editUserDataRequestPayload).subscribe(() => {

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

    this.editUserDataRequestPayload.avatar = "";
    this.editUserDataRequestPayload.displayName = this.editUserDataForm.get('userDisplayName').value;
    this.editUserDataRequestPayload.description = this.editUserDataForm.get('userDescription').value;

  }

  private refresh() {

    this.refreshService.setRefresh(true);
    this.router.navigate([this.route.snapshot.url]);

  }

  onFileSelected(event) {
    this.imagePathPlaceholder = "Uploading ...";

    const formData = new FormData();

    formData.append("files", event.target.files[0]);

    if(this.user.avatar === this.defaultAvatar) {
      this.imageService.uploadImage("/api/file/upload", formData).subscribe(data => {
        let responseData = JSON.parse(data);
        let fileNamesString = responseData.fileNames;
        this.user.avatar = "http://localhost:8080/api/file/" + fileNamesString.slice(1, -1);
        this.avatarFileName = fileNamesString.slice(1, -1);
        this.imagePathPlaceholder = "Upload successful!";
      }, error => {
        if(error.status === 403) {
          alert("To update your avatar, you must be logged in first");
        } else {
          alert("Error while updating avatar, changes will be canceled");
        }
      });
    } else {
      this.imageService.updateImage("/api/file/upload", formData).subscribe(data => {
        let responseData = JSON.parse(data);
        let fileNamesString = responseData.fileNames;
        this.user.avatar = "http://localhost:8080/api/file/" + fileNamesString;
        this.avatarFileName = fileNamesString;
        this.imagePathPlaceholder = "Upload successful!";
      }, error => {
        if(error.status === 403) {
          alert("To update your avatar, you must be logged in first");
        } else {
          alert("Error while updating avatar, changes will be canceled");
        }
      });
    }


  }

  removeAvatar() {
    this.imageService.deleteImage("/api/file/delete/" + this.avatarFileName).subscribe(() => {
        this.user.avatar = this.defaultAvatar;
      this.imagePathPlaceholder = "Change avatar";
    }, error => {
      if(error.status === 403) {
        alert("You must be logged in first to do this task!");
      } else {
        alert("Error occurred while deleting image, please try it again later");
      }
    });
  }
}
