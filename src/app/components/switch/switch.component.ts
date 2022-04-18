import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class SwitchComponent implements OnInit {
	@Input() checked: string;
	@Input() defaultChecked: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}