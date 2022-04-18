import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-round-primary',
	templateUrl: './button-round-primary.component.html',
	styleUrls: ['./button-round-primary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonRoundPrimaryComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}