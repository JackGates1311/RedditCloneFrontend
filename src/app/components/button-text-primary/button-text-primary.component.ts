import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button-text-primary',
	templateUrl: './button-text-primary.component.html',
	styleUrls: ['./button-text-primary.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ButtonTextPrimaryComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}