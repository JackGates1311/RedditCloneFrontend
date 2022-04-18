import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-circle-image',
	templateUrl: './circle-image.component.html',
	styleUrls: ['./circle-image.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CircleImageComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}