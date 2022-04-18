import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationFooterComponent } from './navigation-footer.component';

@NgModule({
	declarations: [
		NavigationFooterComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		NavigationFooterComponent
	],
})
export class NavigationFooterModule { }
