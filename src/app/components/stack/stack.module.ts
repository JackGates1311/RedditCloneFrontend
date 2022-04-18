import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './stack.component';

@NgModule({
	declarations: [
		StackComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		StackComponent
	],
})
export class StackModule { }
