import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreatePostRequestPayload} from "./createPostRequestPayload";
import {PostService} from "../../shared/post/postService";
import {Router} from "@angular/router";
import {CommunityModel} from "../../shared/community/communityModel";
import {CommunityService} from "../../shared/community/communityService";
import {PostTileComponent} from "../../shared/post-tile/post-tile.component";

declare var $ : any;

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})

export class PostCreateComponent implements OnInit {

  communities: Array<CommunityModel> = [];
  createPostForm: FormGroup;
  createPostRequestPayload: CreatePostRequestPayload;

  postTileComponent: PostTileComponent;

  constructor(private postService: PostService, private communityService: CommunityService, private router:Router) {

    this.communityService.getAllCommunities().subscribe(community => {

      this.communities = community;

    });

    this.createPostRequestPayload = {

      communityName: '',
      imagePath: '',
      text: '',
      title: ''
    };

  }

  ngOnInit(): void {

    this.createPostForm = new FormGroup({

      communityName: new FormControl('', Validators.required),
      imagePath: new FormControl(''),
      text: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    });

  }

  createPost() {

    this.createPostRequestPayload.communityName = this.createPostForm.get('communityName').value;
    this.createPostRequestPayload.title = this.createPostForm.get('title').value;
    this.createPostRequestPayload.text = this.createPostForm.get('text').value;

    this.postService.createPost(this.createPostRequestPayload).subscribe( data => {

      alert("Post is successfully created");

      this.refresh();

      $('#btnCreatePost').modal('hide');

    }, error => {

      if(error.status === 403) {

        alert("To create new post, you must be logged in first");

      } else {

        alert("Error while creating post because of database error");
      }

    })
  }

  public refresh() {

    this.postService.setRefresh(true);
  }

}
