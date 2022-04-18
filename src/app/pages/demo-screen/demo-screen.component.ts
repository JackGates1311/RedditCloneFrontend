import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-demo-screen',
	templateUrl: './demo-screen.component.html',
	styles: [`
		:host {
			display: contents;
		}
	`]
})

export class DemoScreenComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}