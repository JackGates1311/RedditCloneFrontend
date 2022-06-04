import { Component, OnInit } from '@angular/core';
import {PostModel} from "../shared/post/postModel";
import {PostService} from "../shared/post/postService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
  }

}
