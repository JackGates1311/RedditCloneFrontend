import {Component, OnInit} from '@angular/core';
import {CommunityModel} from "../../shared/community/communityModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateEditCommunityRequestPayload} from "./createEditCommunityRequestPayload";
import {CommunityService} from "../../shared/community/communityService";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {RefreshService} from "../../shared/service/refreshService";
import {FlairService} from "../../shared/flair/flairService";
import {FlairModel} from "../../shared/flair/flairModel";
import {tap} from "rxjs/operators";

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

  constructor(private communityService: CommunityService, private router:Router, private flairService: FlairService,
              private route: ActivatedRoute, private _location: Location, private refreshService: RefreshService) {

    this.createEditCommunityRequestPayload = {
      name: '',
      description: '',
      flairs: []
    };

  }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {

    this.fillDropdownMenu();

    this.createEditCommunityForm = new FormGroup( {

      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      flairs: new FormControl('')

    });

    if(this.communityId != null) {

      this.communityService.getCommunityById(this.communityId).subscribe( community => {

        this.community = community;

        this.createEditCommunityForm.patchValue({
          'name': this.community.name,
          'description': this.community.description
        });

        this.selectedItems = this.community.flairs;

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

        alert("Error while creating community because of database error");
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
    this.createEditCommunityRequestPayload.flairs = this.selectedItems;

  }

  public refresh() {

    this.refreshService.setRefresh(true);
    this._location.back();

  }

  private fillDropdownMenu() {

    this.flairService.getFlairs().pipe(
        tap((flairModels: FlairModel[]) => {
          this.dropdownList = flairModels.map(flairModel => flairModel.name);
        })
    ).subscribe();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'flairId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  handleFlairValues(flairName: string) {
    this.dropdownList = [...this.dropdownList, flairName];
  }
}
