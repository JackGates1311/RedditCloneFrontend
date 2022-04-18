import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-checkbox-checked',
	templateUrl: './checkbox-checked.component.html',
	styleUrls: ['./checkbox-checked.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CheckboxCheckedComponent implements OnInit {
	@Input() checked: string;

	@Input() defaultChecked: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}