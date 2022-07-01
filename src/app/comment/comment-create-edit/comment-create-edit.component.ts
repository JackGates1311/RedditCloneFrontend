import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentRequestPayload} from "./commentRequestPayload";
import {CommentService} from "../../shared/comment/commentService";
import {CommentModel} from "../../shared/comment/commentModel";
import {RefreshService} from "../../shared/service/refreshService";
import {Location} from "@angular/common";

declare var $ : any;

@Component({
  selector: 'app-comment-create-edit',
  templateUrl: './comment-create-edit.component.html',
  styleUrls: ['./comment-create-edit.component.scss']
})
export class CommentCreateEditComponent implements OnInit {

  commentForm: FormGroup;
  commentRequestPayload: CommentRequestPayload;

  comment: CommentModel = new CommentModel();

  replyButtonId: string;

  @Input() commentId: string;
  @Input() postId: number;
  @Input() repliedToCommentId: number;

  constructor(private commentService: CommentService, private refreshService: RefreshService,
              private _location: Location) {

    this.commentRequestPayload = {

      text: '',
      postId: 0,
      repliedToCommentId: 0

    };

  }

  ngOnInit(): void {
    
    this.commentForm = new FormGroup( {
      
      text: new FormControl('', Validators.required)
      
    });

    if(this.commentId != null) {

      this.commentService.getCommentById(this.commentId).subscribe(comment => {

        this.comment = comment;

        this.commentForm.patchValue({

          'text': this.comment.text

        });

      });
    }

  }

  postComment() {

    this.getDataFromFormGroupPost();

    this.commentService.postComment(this.commentRequestPayload).subscribe(data => {

      this.refresh();

      this.replyButtonId = "#btnReply" + this.commentRequestPayload.repliedToCommentId;

      $(this.replyButtonId).modal('hide');

      }, error => {

      if (error.status === 403) {

        alert("To post comment, you must be logged in first");

      } else {

        alert("Error while posting comment because of database error");
      }

    });

  }

  editComment() {

    this.commentRequestPayload.text = this.commentForm.get('text').value;

    this.commentService.editComment(this.commentRequestPayload, this.commentId).subscribe(data => {

      this.refresh();

      this.replyButtonId = "#btnEditReply" + this.commentId;

      $(this.replyButtonId).modal('hide');

    }, error => {

      if(error.status === 403) {

        alert("To edit comment, you must be logged in first");

      } else {

        alert("Error while editing comment because of database error");
      }

    });

  }

  private getDataFromFormGroupPost() {

    this.commentRequestPayload.text = this.commentForm.get('text').value;
    this.commentRequestPayload.postId = this.postId;
    this.commentRequestPayload.repliedToCommentId = this.repliedToCommentId;

  }

  public refresh() {

    this.refreshService.setRefresh(true);

  }



}
