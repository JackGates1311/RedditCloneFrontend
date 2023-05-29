import { Component, OnInit } from '@angular/core';
import {PostModel} from "../post/postModel";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post/postService";
import {AuthService} from "../../auth/service/auth.service";
import {RefreshService} from "../service/refreshService";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  posts: Array<PostModel> = [];

  communityName: string = this.route.snapshot.paramMap.get('name');
  selectedSortOption: string = "hot";

  constructor(private route: ActivatedRoute, private postService: PostService, public authService: AuthService,
              private refreshService: RefreshService, public localStorage: LocalStorageService) {

    if(this.communityName == null){

      this.getAllPosts("hot");

    } else {

      this.getPostsByCommunityName("hot");

    }

  }

  ngOnInit(): void {

    if(this.communityName == null) {

      this.refreshService.getRefresh().subscribe((value: boolean) => {

        if(value) {

          this.getAllPosts("hot");

        }

      });

    } else {

      this.refreshService.getRefresh().subscribe((value: boolean) => {

        if(value) {

          this.getPostsByCommunityName("hot");

        }

      });

    }

  }

  getAllPosts(sortBy: string) {

    this.postService.getAllPosts(sortBy).subscribe(post => {

      this.posts = post;

    });

  }

  getPostsByCommunityName(sortBy: string) {

    this.postService.getPostsByCommunityName(this.communityName, sortBy).subscribe(post => {

      this.posts = post;

    });

  }


  onSortChange() {

    if(this.communityName == null){

      this.getAllPosts(this.selectedSortOption);

    } else {

      this.getPostsByCommunityName(this.selectedSortOption);

    }
  }
}
