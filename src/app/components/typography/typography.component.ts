import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-typography',
	templateUrl: './typography.component.html',
	styleUrls: ['./typography.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class TypographyComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}