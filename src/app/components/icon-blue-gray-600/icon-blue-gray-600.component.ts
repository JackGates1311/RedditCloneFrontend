import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon-blue-gray-600',
	templateUrl: './icon-blue-gray-600.component.html',
	styleUrls: ['./icon-blue-gray-600.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class IconBlueGray600Component implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}