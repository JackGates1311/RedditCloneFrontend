import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header-white',
	templateUrl: './header-white.component.html',
	styleUrls: ['./header-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class HeaderWhiteComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}