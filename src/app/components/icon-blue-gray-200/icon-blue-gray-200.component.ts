import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon-blue-gray-200',
	templateUrl: './icon-blue-gray-200.component.html',
	styleUrls: ['./icon-blue-gray-200.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class IconBlueGray200Component implements OnInit {
	@Input() liga: string;
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}