import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chip',
	templateUrl: './chip.component.html',
	styleUrls: ['./chip.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class ChipComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}