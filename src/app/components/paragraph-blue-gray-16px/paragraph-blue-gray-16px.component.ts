import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-paragraph-blue-gray-16px',
	templateUrl: './paragraph-blue-gray-16px.component.html',
	styleUrls: ['./paragraph-blue-gray-16px.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ParagraphBlueGray16pxComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}