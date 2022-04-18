import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-stack',
	templateUrl: './stack.component.html',
	styleUrls: ['./stack.component.css'],
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class StackComponent implements OnInit {
	@Input() styleProperties: object;

	constructor() { }

	ngOnInit() {
	}

}