import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentModel} from "../comment/commentModel";
import {CommentService} from "../comment/commentService";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})

export class PostCommentsComponent implements OnInit {

  comments: Array<CommentModel> = [];

  postId: string = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, public commentService: CommentService) {

    if (this.postId != null) {

      this.getPostComments();

    }

  }


  ngOnInit(): void {

  }

  private getPostComments() {

    this.commentService.getPostComments(this.postId).subscribe(comment  => {

      this.comments = comment;

    })

  }

}
