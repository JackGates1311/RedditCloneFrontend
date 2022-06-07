import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CommunityComponent} from "./community/community.component";
import {PostCreateEditComponent} from "./post/post-create-edit/post-create-edit.component";

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'community/:name',
		component: CommunityComponent
	},
	{
		path: 'createNewPost',
		component: PostCreateEditComponent
	},
	{
		path: 'editPost/:id',
		component: PostCreateEditComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
