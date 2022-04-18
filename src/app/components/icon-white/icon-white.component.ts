import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon-white',
	templateUrl: './icon-white.component.html',
	styleUrls: ['./icon-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class IconWhiteComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}