import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-icon-primary-mini',
	templateUrl: './button-icon-primary-mini.component.html',
	styleUrls: ['./button-icon-primary-mini.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonIconPrimaryMiniComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}