import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonContainedPrimaryComponent } from './button-contained-primary.component';

@NgModule({
	declarations: [
		ButtonContainedPrimaryComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		ButtonContainedPrimaryComponent
	],
})
export class ButtonContainedPrimaryModule { }
