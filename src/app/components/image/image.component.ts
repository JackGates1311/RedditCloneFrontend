import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ImageComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}