import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class SliderComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}