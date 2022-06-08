import {Component, OnInit} from '@angular/core';
import {PostService} from "../post/postService";
import {PostModel} from "../post/postModel";
import { ActivatedRoute } from '@angular/router';
import {CommunityService} from "../community/communityService";
import {Subscription} from "rxjs";
import {AuthService} from "../../auth/service/auth.service";
import {RefreshService} from "../service/refreshService";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})

export class PostTileComponent implements OnInit {

  posts: Array<PostModel> = [];

  communityName: string = this.route.snapshot.paramMap.get('name');

  constructor(private route: ActivatedRoute, private postService: PostService, public authService: AuthService,
              private refreshService: RefreshService) {

    if(this.communityName == null){

      this.getAllPosts();

    } else {

      this.getPostsByCommunityName();

    }

  }

  ngOnInit(): void {

    if(this.communityName == null) {

      this.refreshService.getRefresh().subscribe((value: boolean) => {

        if(value) {

          this.getAllPosts();

        }

      });

    } else {

      this.refreshService.getRefresh().subscribe((value: boolean) => {

        if(value) {

          this.getPostsByCommunityName();

        }

      });

    }

  }

  getAllPosts() {

    this.postService.getAllPosts().subscribe(post => {

      this.posts = post;

    });

  }

  getPostsByCommunityName() {

    this.postService.getPostsByCommunityName(this.communityName).subscribe(post => {

      this.posts = post;

    });

  }

  deletePost(postId: number) {

    this.postService.deletePostById(postId).subscribe(post => {

      this.posts = post;

      this.refresh();

    })

  }

  public refresh() {

    this.refreshService.setRefresh(true);
  }

}
