import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon-black',
	templateUrl: './icon-black.component.html',
	styleUrls: ['./icon-black.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class IconBlackComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}