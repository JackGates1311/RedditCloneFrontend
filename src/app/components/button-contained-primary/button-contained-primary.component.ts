import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-contained-primary',
	templateUrl: './button-contained-primary.component.html',
	styleUrls: ['./button-contained-primary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonContainedPrimaryComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}