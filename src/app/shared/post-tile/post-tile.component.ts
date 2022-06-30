import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../post/postService";
import {PostModel} from "../post/postModel";
import {ActivatedRoute, Router} from '@angular/router';
import {CommunityService} from "../community/communityService";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "../../auth/service/auth.service";
import {RefreshService} from "../service/refreshService";
import {LocalStorageService} from "ngx-webstorage";
import {ReactionComponent} from "../reaction/reaction.component";
import {ReactionService} from "../reaction/reactionService";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})

export class PostTileComponent implements OnInit {

  @Input() post;

  postId: String = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, public authService: AuthService, private postService: PostService,
              private refreshService: RefreshService, public localStorage: LocalStorageService,
              public reactionService: ReactionService) {

    this.getPostById(this.postId);

  }

  ngOnInit(): void {

    this.refreshService.getRefresh().subscribe((value: boolean) => {

      if(value) {

        this.getPostById(this.postId);

      }

    });

  }


  getPostById(postId): any {

    return this.postService.getPostById(postId).subscribe(post => {

      this.post = post;

    });

  }

  deletePost(postId: number) {

    this.postService.deletePostById(postId).subscribe(post => {

      this.refresh();

    });

  }

  public refresh() {

    this.refreshService.setRefresh(true);
  }

}
