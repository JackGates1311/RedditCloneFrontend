import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-comment-reply-tile',
  templateUrl: './comment-reply-tile.component.html',
  styleUrls: ['./comment-reply-tile.component.scss']
})
export class CommentReplyTileComponent implements OnInit {

  @Input() commentReplies;

  constructor(public authService: AuthService, public localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

  deleteComment(commentId: any) {

  }

}
