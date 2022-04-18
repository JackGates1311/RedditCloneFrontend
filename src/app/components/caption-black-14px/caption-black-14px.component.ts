import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-caption-black-14px',
	templateUrl: './caption-black-14px.component.html',
	styleUrls: ['./caption-black-14px.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CaptionBlack14pxComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}