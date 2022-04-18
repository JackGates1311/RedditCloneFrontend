import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoScreenComponent } from './pages/demo-screen/demo-screen.component';

const routes: Routes = [
	{
		path: '',
		component: DemoScreenComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
