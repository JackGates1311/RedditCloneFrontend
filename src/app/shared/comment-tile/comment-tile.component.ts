import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";
import {CommentService} from "../comment/commentService";
import {RefreshService} from "../service/refreshService";

@Component({
  selector: 'app-comment-tile',
  templateUrl: './comment-tile.component.html',
  styleUrls: ['./comment-tile.component.scss']
})
export class CommentTileComponent implements OnInit {

  @Input() comments;

  constructor(public authService: AuthService, public localStorage: LocalStorageService, public commentService:
      CommentService, private refreshService: RefreshService) { }

  ngOnInit(): void {

    this.refreshService.getRefresh().subscribe((value: boolean) => {

      if(value) {

      }

    });

  }

  deleteComment(commentId: string) {

    this.commentService.deleteCommentById(commentId).subscribe(comment => {

      this.refresh();

    }, error => {

      if (error.status === 403) {

        alert("To delete comment, you must be logged in first");

      } else {

        alert("Error while deleting comment because of database error");
      }

    });

  }

  public refresh() {

    this.refreshService.setRefresh(true);

  }

}
