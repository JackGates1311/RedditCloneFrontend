import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-community-info-tile',
  templateUrl: './community-info-tile.component.html',
  styleUrls: ['./community-info-tile.component.scss']
})

export class CommunityInfoTileComponent implements OnInit {

  @Input() community;

  constructor() { }

  ngOnInit(): void {
  }

}
