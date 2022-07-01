import {Component, Input, OnInit} from '@angular/core';
import {ReactionService} from "./reactionService";
import {RefreshService} from "../service/refreshService";
import {Location} from "@angular/common";
import {ReactionModel} from "./reactionModel";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})

export class ReactionComponent implements OnInit {

  @Input() post;

  @Input() comment;

  @Input() reactionForComment: boolean;

  reactions: Array<ReactionModel> = [];
  username: string;

  isFound: boolean = false;

  constructor(private reactionService: ReactionService, private refreshService: RefreshService,
              private _location: Location, private localStorage: LocalStorageService) {


    this.username = localStorage.retrieve('username');
    this.getReactionsByUsername();

  }

  ngOnInit(): void {

    this.refreshService.getRefresh().subscribe((value: boolean) => {

      if(value) {

        this.getReactionsByUsername();

      }

    });

  }

  vote(reactionType: string, postId: number, commentId: number) {

    this.reactionService.sendReaction(reactionType, postId, commentId).subscribe(data => {

      this.refresh();

    });

  }

  getReactionsByUsername() {

    this.reactionService.getReactionsByUsername().subscribe(reaction => {

      this.reactions = reaction;

    });
  }

  public refresh() {

    this.refreshService.setRefresh(true);

  }

  public setFound(foundState: boolean) {

    this.isFound = foundState;

  }
}
