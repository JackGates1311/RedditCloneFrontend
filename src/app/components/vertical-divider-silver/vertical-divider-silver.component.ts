import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-vertical-divider-silver',
	templateUrl: './vertical-divider-silver.component.html',
	styleUrls: ['./vertical-divider-silver.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class VerticalDividerSilverComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}