import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-radio-selected',
	templateUrl: './radio-selected.component.html',
	styleUrls: ['./radio-selected.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class RadioSelectedComponent implements OnInit {
	@Input() checked: string;
	@Input() defaultChecked: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}