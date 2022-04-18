import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DemoScreenComponent } from './demo-screen.component';

import { ButtonContainedPrimaryModule } from '../../components/button-contained-primary/button-contained-primary.module';
import { IconBlackModule } from '../../components/icon-black/icon-black.module';
import { ImageModule } from '../../components/image/image.module';
import { MainModule } from '../../components/main/main.module';
import { NavigationHeaderModule } from '../../components/navigation-header/navigation-header.module';
import { ParagraphBlack16pxModule } from '../../components/paragraph-black-16px/paragraph-black-16px.module';
import { RowModule } from '../../components/row/row.module';
import { StackModule } from '../../components/stack/stack.module';


@NgModule({
	declarations: [
		DemoScreenComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ButtonContainedPrimaryModule,
		IconBlackModule,
		ImageModule,
		MainModule,
		NavigationHeaderModule,
		ParagraphBlack16pxModule,
		RowModule,
		StackModule,
	],
})
export class DemoScreenModule { }
