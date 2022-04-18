import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxUncheckedComponent } from './checkbox-unchecked.component';

@NgModule({
	declarations: [
		CheckboxUncheckedComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		CheckboxUncheckedComponent
	],
})
export class CheckboxUncheckedModule { }
