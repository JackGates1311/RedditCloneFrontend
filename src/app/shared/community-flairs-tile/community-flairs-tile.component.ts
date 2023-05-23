import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-community-flairs-tile',
  templateUrl: './community-flairs-tile.component.html',
  styleUrls: ['./community-flairs-tile.component.scss']
})
export class CommunityFlairsTileComponent implements OnInit {

  @Input() community;

  constructor() { }

  ngOnInit(): void {
  }

}
