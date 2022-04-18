import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSquareComponent } from './image-square.component';

@NgModule({
	declarations: [
		ImageSquareComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		ImageSquareComponent
	],
})
export class ImageSquareModule { }
