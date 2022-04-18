import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-navigation-footer',
	templateUrl: './navigation-footer.component.html',
	styleUrls: ['./navigation-footer.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class NavigationFooterComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}