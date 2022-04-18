import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-text-gray-600',
	templateUrl: './button-text-gray-600.component.html',
	styleUrls: ['./button-text-gray-600.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonTextGray600Component implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}