import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon-purple',
	templateUrl: './icon-purple.component.html',
	styleUrls: ['./icon-purple.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class IconPurpleComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}