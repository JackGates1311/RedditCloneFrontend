import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-white',
	templateUrl: './card-white.component.html',
	styleUrls: ['./card-white.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class CardWhiteComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}