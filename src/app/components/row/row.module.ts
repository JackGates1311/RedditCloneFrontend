import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowComponent } from './row.component';

@NgModule({
	declarations: [
		RowComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		RowComponent
	],
})
export class RowModule { }
