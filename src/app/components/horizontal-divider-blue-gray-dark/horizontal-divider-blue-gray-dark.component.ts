import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-horizontal-divider-blue-gray-dark',
	templateUrl: './horizontal-divider-blue-gray-dark.component.html',
	styleUrls: ['./horizontal-divider-blue-gray-dark.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class HorizontalDividerBlueGrayDarkComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}