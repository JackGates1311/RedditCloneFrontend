import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-image-square',
	templateUrl: './image-square.component.html',
	styleUrls: ['./image-square.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ImageSquareComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}