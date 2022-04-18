import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-navigation-header',
	templateUrl: './navigation-header.component.html',
	styleUrls: ['./navigation-header.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class NavigationHeaderComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}