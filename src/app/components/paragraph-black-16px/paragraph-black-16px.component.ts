import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-paragraph-black-16px',
	templateUrl: './paragraph-black-16px.component.html',
	styleUrls: ['./paragraph-black-16px.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ParagraphBlack16pxComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}