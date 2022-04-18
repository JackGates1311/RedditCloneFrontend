import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-caption-blue-gray-14px',
	templateUrl: './caption-blue-gray-14px.component.html',
	styleUrls: ['./caption-blue-gray-14px.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CaptionBlueGray14pxComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}