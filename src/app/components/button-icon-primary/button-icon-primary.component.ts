import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-icon-primary',
	templateUrl: './button-icon-primary.component.html',
	styleUrls: ['./button-icon-primary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonIconPrimaryComponent implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}