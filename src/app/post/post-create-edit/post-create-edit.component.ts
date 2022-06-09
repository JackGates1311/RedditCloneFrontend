import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateEditPostRequestPayload} from "./createEditPostRequestPayload";
import {PostService} from "../../shared/post/postService";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityModel} from "../../shared/community/communityModel";
import {CommunityService} from "../../shared/community/communityService";
import {PostTileComponent} from "../../shared/post-tile/post-tile.component";
import {PostModel} from "../../shared/post/postModel";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create-edit.component.html',
  styleUrls: ['./post-create-edit.component.scss']
})

export class PostCreateEditComponent implements OnInit {

  communities: Array<CommunityModel> = [];
  post: PostModel = new PostModel();

  createEditPostForm: FormGroup;
  createEditPostRequestPayload: CreateEditPostRequestPayload;

  postTileComponent: PostTileComponent;

  postId: string = this.route.snapshot.paramMap.get('id');

  constructor(private postService: PostService, private communityService: CommunityService, private router:Router,
              private route: ActivatedRoute, private refreshService: RefreshService, private _location: Location) {

    this.communityService.getAllCommunities().subscribe(community => {

      this.communities = community;

    });

    this.createEditPostRequestPayload = {

      communityName: '',
      imagePath: '',
      text: '',
      title: '',
      reactionCount: 0
    };


  }

  ngOnInit(): void {

    this.createEditPostForm = new FormGroup({

      communityName: new FormControl('', Validators.required),
      imagePath: new FormControl(''),
      text: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    });

    if(this.postId != null) {

      this.postService.getPostById(this.postId).subscribe(post => {

        this.post = post;

        this.createEditPostForm.patchValue({

          'communityName' : this.post.communityName,
          'title': this.post.title,
          'text': this.post.text

        });

      });

    }


  }

  createPost() {

    this.getDataFromFormGroup();

    this.postService.createPost(this.createEditPostRequestPayload).subscribe( data => {

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

    this.postService.updatePost(this.createEditPostRequestPayload, this.postId).subscribe( data => {

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

  }

  public refresh() {

    this.refreshService.setRefresh(true);
    this._location.back();

  }

}
