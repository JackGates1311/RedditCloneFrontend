import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateEditPostRequestPayload} from "./createEditPostRequestPayload";
import {PostService} from "../../shared/post/postService";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityModel} from "../../shared/community/communityModel";
import {CommunityService} from "../../shared/community/communityService";
import {PostModel} from "../../shared/post/postModel";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";
import {ImageService} from "../../shared/image/imageService";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create-edit.component.html',
  styleUrls: ['./post-create-edit.component.scss']
})

export class PostCreateEditComponent implements OnInit {

  communities: Array<CommunityModel> = [];
  post: PostModel = new PostModel();
  hiddenFlairs = true;

  createEditPostForm: FormGroup;
  createEditPostRequestPayload: CreateEditPostRequestPayload;

  postId: string = this.route.snapshot.paramMap.get('id');
  postImages: string[] = [];
  imagePathPlaceholder = "Images not selected";

  constructor(private postService: PostService, private communityService: CommunityService, private router:Router,
              private route: ActivatedRoute, private refreshService: RefreshService, private _location: Location,
              private imageService: ImageService) {

    this.communityService.getAllCommunities().subscribe(community => {
      this.communities = community;
      if(this.postId != null) {
        this.dropdownList = this.communities.find(community => community.name === this.post.communityName).flairs;
      }
    });

    this.createEditPostRequestPayload = {
      communityName: '',
      imagePath: '',
      text: '',
      title: '',
      reactionCount: 0,
      flairs: []
    };
  }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {

    this.fillDropdownMenu();

    this.createEditPostForm = new FormGroup({
      communityName: new FormControl('', Validators.required),
      imagePath: new FormControl(''),
      text: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      flairs: new FormControl('')
    });

    if(this.postId != null) {
      this.postService.getPostById(this.postId).subscribe(post => {
        this.post = post;
        this.createEditPostForm.patchValue({
          'communityName' : this.post.communityName,
          'title': this.post.title,
          'text': this.post.text,
        });
        this.selectedItems = this.post.flairs;
        this.imagePathPlaceholder = "Upload more images"
      });
    }
  }

  fillDropdownMenu() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'flairId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  createPost() {

    this.getDataFromFormGroup();

    this.postService.createPost(this.createEditPostRequestPayload).subscribe( data => {

      if(this.postImages.length > 0) {
        this.uploadPostImages(data.split(":")[1].trim());
      }

      this.refresh();

    }, error => {

      if(error.status === 403) {

        alert("To create new post, you must be logged in first");

      } else {

        alert("Error while creating post because of database error");
      }

    });
  }

  editPost() {

    this.getDataFromFormGroup();

    this.postService.updatePost(this.createEditPostRequestPayload, this.postId).subscribe( () => {
      if(this.postImages.length > 0) {
        this.uploadPostImages(Number(this.postId));
      }

      this.refresh();

    }, error => {

      if(error.status === 403) {

        alert("To update new post, you must be logged in first");

      } else {

        alert("Error while updating post because of database error");
      }

    });
  }

  getDataFromFormGroup() {
    this.createEditPostRequestPayload.communityName = this.createEditPostForm.get('communityName').value;
    this.createEditPostRequestPayload.title = this.createEditPostForm.get('title').value;
    this.createEditPostRequestPayload.text = this.createEditPostForm.get('text').value;
    this.createEditPostRequestPayload.flairs = this.selectedItems;
  }

  public refresh() {
    this.refreshService.setRefresh(true);
    this._location.back();
  }

  onCommunityChanged(value) {
    let selectedCommunity = this.communities.find(community => community.name === value);
    this.dropdownList = selectedCommunity.flairs;
    if(selectedCommunity.flairs !== null && selectedCommunity.flairs !== []) {
      this.hiddenFlairs = false;
    }
    this.selectedItems = [];
  }

  onFileSelected(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.postImages.push(event.target.files[i]);
    }
    this.imagePathPlaceholder = "Images selected (" + this.postImages.length + ")";
  }

  uploadPostImages(postId: number) {

    const formData = new FormData();

    for (let i = 0; i < this.postImages.length; i++) {
      formData.append("files", this.postImages[i]);
    }

    this.imageService.uploadImage("/api/file/upload?postId=" + postId, formData).subscribe( () => {

    }, () => {
        alert("Error occurred while post images, post will be published without images");
    });
  }
}
