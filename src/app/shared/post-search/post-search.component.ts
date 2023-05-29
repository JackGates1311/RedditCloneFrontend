import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {PostService} from "../post/postService";
import {ValidatorsCustom} from "../validators/validatorsCustom";

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  @Output() postSearchResultsEmitted = new EventEmitter<Observable<any>>();

  postSearchForm: FormGroup;
  apiURL: string = environment.apiURL;

  constructor(private postService: PostService, private validatorsCustom: ValidatorsCustom) { }

  ngOnInit(): void {
    this.postSearchForm = new FormGroup({
      title: new FormControl(''),
      titleSearchMode: new FormControl('standard'),
      flairs: new FormControl(''),
      flairsSearchMode: new FormControl('standard'),
      text: new FormControl(''),
      textSearchMode: new FormControl('standard'),
      minCommentCount: new FormControl('', [Validators.min(0)]),
      maxCommentCount: new FormControl('', [Validators.min(0)]),
      minKarma: new FormControl(''),
      maxKarma: new FormControl(''),
      isMust: new FormControl('and')
    }, {validators: this.validatorsCustom.minMaxValidator});
  }

  searchPosts() {
    this.postService.searchPost(this.generatePostSearchUrl()).subscribe(data => {
      this.emitPostSearchResults(data);
    }, () => {
      alert("Error occurred while retrieving search results for posts!");
    })
  }

  generatePostSearchUrl(): string {
    let url = new URL(this.apiURL + "/api/posts/search");

    let params = new URLSearchParams();

    if(this.postSearchForm.get('title').value !== null && this.postSearchForm.get('title').value !== "") {
      params.set('title', this.postSearchForm.get('title').value);
    }
    if(this.postSearchForm.get('titleSearchMode').value !== null &&
        this.postSearchForm.get('titleSearchMode').value !== "" &&
        this.postSearchForm.get('titleSearchMode').value !== "standard") {
      params.set('titleSearchMode', this.postSearchForm.get('titleSearchMode').value);
    }

    if(this.postSearchForm.get('flairs').value !== null && this.postSearchForm.get('flairs').value !== "") {
      params.set('flairs', this.postSearchForm.get('flairs').value);
    }
    if(this.postSearchForm.get('flairsSearchMode').value !== null &&
        this.postSearchForm.get('flairsSearchMode').value !== "" &&
        this.postSearchForm.get('flairsSearchMode').value !== "standard") {
      params.set('flairsSearchMode', this.postSearchForm.get('flairsSearchMode').value);
    }

    if(this.postSearchForm.get('text').value !== null && this.postSearchForm.get('text').value !== "") {
      params.set('text', this.postSearchForm.get('text').value);
    }
    if(this.postSearchForm.get('textSearchMode').value !== null &&
        this.postSearchForm.get('textSearchMode').value !== "" &&
        this.postSearchForm.get('textSearchMode').value !== "standard") {
      params.set('textSearchMode', this.postSearchForm.get('textSearchMode').value);
    }

    if(this.postSearchForm.get('minCommentCount').value !== null &&
        this.postSearchForm.get('minCommentCount').value !== "") {
      params.set('minComments', this.postSearchForm.get('minCommentCount').value);
    }
    if(this.postSearchForm.get('maxCommentCount').value !== null &&
        this.postSearchForm.get('maxCommentCount').value !== "") {
      params.set('maxComments', this.postSearchForm.get('maxCommentCount').value);
    }

    if(this.postSearchForm.get('minKarma').value !== null &&
        this.postSearchForm.get('minKarma').value !== "") {
      params.set('minKarma', this.postSearchForm.get('minKarma').value);
    }
    if(this.postSearchForm.get('maxKarma').value !== null &&
        this.postSearchForm.get('maxKarma').value !== "") {
      params.set('maxKarma', this.postSearchForm.get('maxKarma').value);
    }

    if(this.postSearchForm.get('isMust').value !== null &&
        this.postSearchForm.get('isMust').value !== "") {
      if(this.postSearchForm.get('isMust').value === "or") {
        params.set('isMust', 'false');
      } else {
        params.set('isMust', 'true');
      }
    }

    url.search = params.toString();

    return url.toString();
  }

  emitPostSearchResults(postSearchResults: Observable<any>) {
    const observableData = new Observable<any>((observer) => {
      observer.next(postSearchResults);
      observer.complete();
    });
    this.postSearchResultsEmitted.emit(observableData);
  }
}
