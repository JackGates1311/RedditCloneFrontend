import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header-black',
	templateUrl: './header-black.component.html',
	styleUrls: ['./header-black.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class HeaderBlackComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}