import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-icon-secondary',
	templateUrl: './button-icon-secondary.component.html',
	styleUrls: ['./button-icon-secondary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonIconSecondaryComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}