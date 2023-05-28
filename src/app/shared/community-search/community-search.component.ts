import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {CommunityService} from "../community/communityService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-community-search',
  templateUrl: './community-search.component.html',
  styleUrls: ['./community-search.component.scss']
})
export class CommunitySearchComponent implements OnInit {
  @Output() communitySearchResultsEmitted = new EventEmitter<Observable<any>>();

  communitySearchForm: FormGroup;
  apiURL: string = environment.apiURL;

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {

    this.communitySearchForm = new FormGroup({
      name: new FormControl(''),
      nameSearchMode: new FormControl('standard'),
      description: new FormControl(''),
      descriptionSearchMode: new FormControl('standard'),
      minPosts: new FormControl('', [Validators.min(0)]),
      maxPosts: new FormControl('', [Validators.min(0)]),
      minKarma: new FormControl(''),
      maxKarma: new FormControl(''),
      isMust: new FormControl('and')
    }, {validators: this.minMaxValidator});

  }

  minMaxValidator(control: AbstractControl): ValidationErrors | null {
    const minPosts = control.get('minPosts')?.value;
    const maxPosts = control.get('maxPosts')?.value;
    const minKarma = control.get('minKarma')?.value;
    const maxKarma = control.get('maxKarma')?.value;

    if ((minPosts !== null && maxPosts !== null) && (minPosts > maxPosts)) {
      control.get('maxPosts')?.setErrors({ minMaxPosts: true });
    } else {
      control.get('maxPosts')?.setErrors(null);
    }

    if ((minKarma !== null && maxKarma !== null) && (minKarma > maxKarma)) {
      control.get('maxKarma')?.setErrors({ minMaxKarma: true });
    } else {
      control.get('maxKarma')?.setErrors(null);
    }

    if (minPosts !== null && maxPosts === '') {
      control.get('maxPosts')?.setErrors(null);
    }

    if (minKarma !== null && maxKarma === '') {
      control.get('maxKarma')?.setErrors(null);
    }

    if (control.errors && Object.keys(control.errors).length === 0) {
      control.setErrors(null);
    }

    return null;
  }

  searchCommunities() {
    this.communityService.searchCommunity(this.generateCommunitySearchUrl()).subscribe(data => {
      this.emitCommunitySearchResults(data);
    }, () => {
      alert("Error occurred while retrieving search results for communities!");
    });
  }

  generateCommunitySearchUrl(): string {

    let url = new URL(this.apiURL + "/api/communities/search");

    let params = new URLSearchParams();
    if(this.communitySearchForm.get('name').value !== null && this.communitySearchForm.get('name').value !== "") {
      params.set('name', this.communitySearchForm.get('name').value);
    }
    if(this.communitySearchForm.get('nameSearchMode').value !== null &&
        this.communitySearchForm.get('nameSearchMode').value !== "" &&
        this.communitySearchForm.get('nameSearchMode').value !== "standard") {
      params.set('nameSearchMode', this.communitySearchForm.get('nameSearchMode').value);
    }

    if(this.communitySearchForm.get('description').value !== null &&
        this.communitySearchForm.get('description').value !== "") {
      params.set('description', this.communitySearchForm.get('description').value);
    }
    if(this.communitySearchForm.get('descriptionSearchMode').value !== null &&
        this.communitySearchForm.get('descriptionSearchMode').value !== "" &&
        this.communitySearchForm.get('descriptionSearchMode').value !== "standard") {
      params.set('descriptionSearchMode', this.communitySearchForm.get('descriptionSearchMode').value);
    }

    if(this.communitySearchForm.get('minPosts').value !== null &&
        this.communitySearchForm.get('minPosts').value !== "") {
      params.set('minPosts', this.communitySearchForm.get('minPosts').value);
    }
    if(this.communitySearchForm.get('maxPosts').value !== null &&
        this.communitySearchForm.get('maxPosts').value !== "") {
      params.set('maxPosts', this.communitySearchForm.get('maxPosts').value);
    }

    if(this.communitySearchForm.get('minKarma').value !== null &&
        this.communitySearchForm.get('minKarma').value !== "") {
      params.set('minKarma', this.communitySearchForm.get('minKarma').value);
    }
    if(this.communitySearchForm.get('maxKarma').value !== null &&
        this.communitySearchForm.get('maxKarma').value !== "") {
      params.set('maxKarma', this.communitySearchForm.get('maxKarma').value);
    }

    if(this.communitySearchForm.get('isMust').value !== null &&
        this.communitySearchForm.get('isMust').value !== "") {
       if(this.communitySearchForm.get('isMust').value === "or") {
         params.set('isMust', 'false');
       } else {
         params.set('isMust', 'true');
       }
    }

    url.search = params.toString();

    return url.toString();
  }

  emitCommunitySearchResults(communitySearchResults: Observable<any>) {
    const observableData = new Observable<any>((observer) => {
      observer.next(communitySearchResults);
      observer.complete();
    });
    this.communitySearchResultsEmitted.emit(observableData);
  }

}
