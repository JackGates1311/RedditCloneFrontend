import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleImageComponent } from './circle-image.component';

@NgModule({
	declarations: [
		CircleImageComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		CircleImageComponent
	],
})
export class CircleImageModule { }
