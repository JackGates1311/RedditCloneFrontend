import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-row',
	templateUrl: './row.component.html',
	styleUrls: ['./row.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class RowComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}