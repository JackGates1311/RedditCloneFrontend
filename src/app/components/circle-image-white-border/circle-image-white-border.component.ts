import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-circle-image-white-border',
	templateUrl: './circle-image-white-border.component.html',
	styleUrls: ['./circle-image-white-border.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CircleImageWhiteBorderComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}