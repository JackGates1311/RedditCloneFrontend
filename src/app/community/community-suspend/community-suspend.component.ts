import { Component, OnInit } from '@angular/core';
import {CommunityModel} from "../../shared/community/communityModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommunitySuspendRequestPayload} from "./communitySuspendRequestPayload";
import {CommunityService} from "../../shared/community/communityService";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

declare var $ : any;

@Component({
  selector: 'app-community-suspend',
  templateUrl: './community-suspend.component.html',
  styleUrls: ['./community-suspend.component.scss']
})

export class CommunitySuspendComponent implements OnInit {

  communities: Array<CommunityModel> = [];

  suspendCommunityForm: FormGroup;
  communitySuspendRequestPayload: CommunitySuspendRequestPayload;

  communityId: string;

  constructor(private communityService: CommunityService, private refreshService: RefreshService,
              private _location: Location, private router:Router) {

    this.communityService.getAllCommunities().subscribe(community => {

      this.communities = community;

    });

    this.communitySuspendRequestPayload = {

      suspendedReason: ''

    }

  }

  ngOnInit(): void {

    this.suspendCommunityForm = new FormGroup({

      communityId: new FormControl('', Validators.required),
      suspendedReason: new FormControl('', Validators.required)

    });
  }

  suspendCommunity() {

    this.communityId = this.suspendCommunityForm.get('communityId').value;
    this.communitySuspendRequestPayload.suspendedReason = this.suspendCommunityForm.get('suspendedReason').value;

    this.communityService.suspendCommunity(this.communitySuspendRequestPayload, this.communityId).subscribe(data => {

      this.refresh();

      $('#btnSuspendCommunity').modal('hide');

    }, error => {

      if(error.status === 403) {

        alert("To suspend community, you must be logged in as administrator");

      } else {

        alert("Error while suspending community because of database error");
      }

    });

  }

  public refresh() {

    this.refreshService.setRefresh(true);
    this.router.navigateByUrl("/");

  }

}
