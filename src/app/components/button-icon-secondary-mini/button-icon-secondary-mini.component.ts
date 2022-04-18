import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-icon-secondary-mini',
	templateUrl: './button-icon-secondary-mini.component.html',
	styleUrls: ['./button-icon-secondary-mini.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonIconSecondaryMiniComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}