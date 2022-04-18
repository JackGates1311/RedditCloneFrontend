import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-outlined-primary',
	templateUrl: './button-outlined-primary.component.html',
	styleUrls: ['./button-outlined-primary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonOutlinedPrimaryComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}