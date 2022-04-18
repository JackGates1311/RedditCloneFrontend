import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-radio-unselected',
	templateUrl: './radio-unselected.component.html',
	styleUrls: ['./radio-unselected.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class RadioUnselectedComponent implements OnInit {
	@Input() checked: string;
	@Input() defaultChecked: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}