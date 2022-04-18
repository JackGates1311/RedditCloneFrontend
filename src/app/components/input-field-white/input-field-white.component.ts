import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-input-field-white',
	templateUrl: './input-field-white.component.html',
	styleUrls: ['./input-field-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class InputFieldWhiteComponent implements OnInit {
	@Input() styleProperties: object;
	@Input() placeholder: string;

	constructor() { }

	ngOnInit() {
	}

}