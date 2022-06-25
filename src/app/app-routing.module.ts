import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CommunityViewComponent} from "./community/community-view/community-view.component";
import {PostCreateEditComponent} from "./post/post-create-edit/post-create-edit.component";
import {CommunityCreateEditComponent} from "./community/community-create-edit/community-create-edit.component";
import {EditUserDataComponent} from "./auth/edit-user-data/edit-user-data.component";

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
		component: CommunityViewComponent
	},
	{
		path: 'createNewPost',
		component: PostCreateEditComponent
	},
	{
		path: 'editPost/:id',
		component: PostCreateEditComponent
	},
	{
		path: 'createNewCommunity',
		component: CommunityCreateEditComponent
	},
	{

		path: 'editCommunity/:id',
		component: CommunityCreateEditComponent
	},
	{
		path: 'accountInfo',
		component: EditUserDataComponent

	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
