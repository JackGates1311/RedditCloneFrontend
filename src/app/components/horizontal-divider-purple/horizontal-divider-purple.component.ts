import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-horizontal-divider-purple',
	templateUrl: './horizontal-divider-purple.component.html',
	styleUrls: ['./horizontal-divider-purple.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class HorizontalDividerPurpleComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}