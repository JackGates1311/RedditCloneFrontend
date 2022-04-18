import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-title-black',
	templateUrl: './title-black.component.html',
	styleUrls: ['./title-black.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class TitleBlackComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}