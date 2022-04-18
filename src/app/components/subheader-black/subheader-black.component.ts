import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-subheader-black',
	templateUrl: './subheader-black.component.html',
	styleUrls: ['./subheader-black.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class SubheaderBlackComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}