import { Component, OnInit } from '@angular/core';
import {PostService} from "../post/postService";
import {PostModel} from "../post/postModel";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {

    this.postService.getAllPosts().subscribe(post => {

      this.posts = post;

    });
  }

  ngOnInit(): void {


  }
}
