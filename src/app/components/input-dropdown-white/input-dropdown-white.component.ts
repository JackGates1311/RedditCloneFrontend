import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-input-dropdown-white',
	templateUrl: './input-dropdown-white.component.html',
	styleUrls: ['./input-dropdown-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class InputDropdownWhiteComponent implements OnInit {
	@Input() true: any;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}