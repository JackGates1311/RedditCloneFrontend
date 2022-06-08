import { Component, OnInit } from '@angular/core';
import {CommunityModel} from "../../shared/community/communityModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateEditCommunityRequestPayload} from "./createEditCommunityRequestPayload";
import {CommunityService} from "../../shared/community/communityService";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {RefreshService} from "../../shared/service/refreshService";

@Component({
  selector: 'app-community-create-edit',
  templateUrl: './community-create-edit.component.html',
  styleUrls: ['./community-create-edit.component.scss']
})

export class CommunityCreateEditComponent implements OnInit {

  community: CommunityModel = new CommunityModel();

  createEditCommunityForm: FormGroup;
  createEditCommunityRequestPayload: CreateEditCommunityRequestPayload;

  communityId: string = this.route.snapshot.paramMap.get('id');

  constructor(private communityService: CommunityService, private router:Router,
              private route: ActivatedRoute, private _location: Location, private refreshService: RefreshService) {

    this.createEditCommunityRequestPayload = {

      name: '',
      description: ''
    };

  }

  ngOnInit(): void {

    this.createEditCommunityForm = new FormGroup( {

      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      rules: new FormControl(''),
      flairs: new FormControl('')

    });

    if(this.communityId != null) {

      this.communityService.getCommunityById(this.communityId).subscribe( community => {

        this.community = community;

        this.createEditCommunityForm.patchValue({

          'name': this.community.name,
          'description': this.community.description
        });

      });

    }

  }

  createCommunity() {

    this.getDataFromFormGroup();

    this.communityService.createCommunity(this.createEditCommunityRequestPayload).subscribe(data => {

      this.refresh();

    }, error => {

      if(error.status === 403) {

        alert("To create new community, you must be logged in first");

      } else {

        alert("Error while creating post because of database error");
      }

    });
  }

  editCommunity() {

    this.getDataFromFormGroup();

    this.communityService.updateCommunity(this.createEditCommunityRequestPayload, this.communityId).subscribe(data => {

      this.refresh();

    }, error => {

      if(error.status === 403) {

        alert("To update new community, you must be logged in first");

      } else {

        alert("Error while updating community because of database error");
      }

    });
  }

  getDataFromFormGroup() {

    this.createEditCommunityRequestPayload.name = this.createEditCommunityForm.get('name').value;
    this.createEditCommunityRequestPayload.description = this.createEditCommunityForm.get('description').value;

  }

  public refresh() {

    this.refreshService.setRefresh(true);
    this._location.back();

  }
}
