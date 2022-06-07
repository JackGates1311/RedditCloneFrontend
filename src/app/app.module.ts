import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/login/login.component';
import {LocalStorage, NgxWebstorageModule} from "ngx-webstorage";
import { HomeComponent } from './home/home.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { VoteComponent } from './shared/vote/vote.component';
import { PostCommentsComponent } from './shared/post-comments/post-comments.component';
import { CommentTileComponent } from './shared/comment-tile/comment-tile.component';
import { CommunityComponent } from './community/community.component';
import {CommunityInfoTileComponent} from './shared/community-info-tile/community-info-tile.component';
import { CommunityFlairsTileComponent } from './shared/community-flairs-tile/community-flairs-tile.component';
import { CommunityRulesTileComponent } from './shared/community-rules-tile/community-rules-tile.component';
import { PostCreateEditComponent } from './post/post-create-edit/post-create-edit.component';
import {PostListComponent} from "./shared/post-list/post-list.component";


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		PostTileComponent,
		VoteComponent,
		PostCommentsComponent,
		CommentTileComponent,
		CommunityComponent,
		CommunityInfoTileComponent,
		CommunityFlairsTileComponent,
		CommunityRulesTileComponent,
		PostCreateEditComponent,
		PostListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxWebstorageModule.forRoot()
],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
