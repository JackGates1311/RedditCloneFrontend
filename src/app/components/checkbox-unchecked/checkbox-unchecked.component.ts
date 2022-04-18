import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-checkbox-unchecked',
	templateUrl: './checkbox-unchecked.component.html',
	styleUrls: ['./checkbox-unchecked.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CheckboxUncheckedComponent implements OnInit {
	@Input() checked: string;

	@Input() defaultChecked: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}