import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-input-stepper-white',
	templateUrl: './input-stepper-white.component.html',
	styleUrls: ['./input-stepper-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class InputStepperWhiteComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}