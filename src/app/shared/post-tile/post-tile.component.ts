import {Component, OnInit} from '@angular/core';
import {PostService} from "../post/postService";
import {PostModel} from "../post/postModel";
import { ActivatedRoute } from '@angular/router';
import {CommunityService} from "../community/communityService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})

export class PostTileComponent implements OnInit {

  posts: Array<PostModel> = [];
  communityName: string = this.route.snapshot.paramMap.get('name');

  private subscriptionName: Subscription;

  constructor(private route: ActivatedRoute, private postService: PostService) {

    if(this.communityName == null){

      this.getAllPosts();

    } else {

      this.postService.getPostsByCommunityName(this.communityName).subscribe(post => {

        this.posts = post;

      })

    }

  }

  ngOnInit(): void {

    this.postService.getRefresh().subscribe((value: boolean) => {

      if(value) {

        this.getAllPosts();

      }

    })

  }

  getAllPosts() {

    this.postService.getAllPosts().subscribe(post => {

      this.posts = post;

    });

  }

}
