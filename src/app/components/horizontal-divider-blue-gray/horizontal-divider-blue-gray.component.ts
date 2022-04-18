import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-horizontal-divider-blue-gray',
	templateUrl: './horizontal-divider-blue-gray.component.html',
	styleUrls: ['./horizontal-divider-blue-gray.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class HorizontalDividerBlueGrayComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}