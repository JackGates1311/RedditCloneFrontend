import { Component, OnInit } from '@angular/core';
import {RefreshService} from "../../shared/service/refreshService";
import {PostService} from "../../shared/post/postService";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
