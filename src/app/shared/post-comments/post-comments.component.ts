import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentModel} from "../comment/commentModel";
import {CommentService} from "../comment/commentService";
import {AuthService} from "../../auth/service/auth.service";
import {RefreshService} from "../service/refreshService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentRequestPayload} from "../../comment/comment-create-edit/commentRequestPayload";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})

export class PostCommentsComponent implements OnInit {

  comments: Array<CommentModel> = [];

  commentForm: FormGroup;
  commentRequestPayload: CommentRequestPayload;

  postId: string = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, public commentService: CommentService,
              private refreshService: RefreshService, public authService: AuthService) {

    this.commentRequestPayload = {

      text: '',
      postId: 0,
      repliedToCommentId: 0

    }

    if (this.postId != null) {

      this.getPostComments();

    }

  }


  ngOnInit(): void {

    this.commentForm = new FormGroup({

      text: new FormControl('', Validators.required)

    });

    this.refreshService.getRefresh().subscribe((value: boolean) => {

      if(value) {

        this.getPostComments();

      }

    });

  }

  private getPostComments() {

    this.commentService.getPostComments(this.postId).subscribe(comment  => {

      this.comments = comment;

    })

  }

  postComment() {

    if(this.commentForm.invalid) {

      alert("You can not post a blank comment");

    } else {

      this.getDataFromFormGroupPost();

      this.commentService.postComment(this.commentRequestPayload).subscribe(data => {

        this.refresh();

        this.commentForm.patchValue({'text': ''});

      }, error => {

        if (error.status === 403) {

          alert("To post comment, you must be logged in first");

        } else {

          alert("Error while posting comment because of database error");
        }

      });

    }

  }

  private getDataFromFormGroupPost() {

    this.commentRequestPayload.text = this.commentForm.get('text').value;
    this.commentRequestPayload.postId = Number(this.postId);
    this.commentRequestPayload.repliedToCommentId = null;

  }

  public refresh() {

    this.refreshService.setRefresh(true);
  }

}
