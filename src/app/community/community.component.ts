import { Component, OnInit } from '@angular/core';
import {CommunityModel} from "../shared/community/communityModel";
import {CommunityService} from "../shared/community/communityService";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})

export class CommunityComponent implements OnInit {

  community: CommunityModel = new CommunityModel();

  constructor(private route: ActivatedRoute, private communityService: CommunityService) {

    this.communityService.getCommunityByName(this.route.snapshot.paramMap.get('name')).subscribe(community => {

      this.community = community;

    });
  }

  ngOnInit(): void {

  }

}
