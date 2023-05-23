import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/login/login.component';
import {LocalStorage, NgxWebstorageModule} from "ngx-webstorage";
import { HomeComponent } from './home/home.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { ReactionComponent } from './shared/reaction/reaction.component';
import { PostCommentsComponent } from './shared/post-comments/post-comments.component';
import { CommentTileComponent } from './shared/comment-tile/comment-tile.component';
import { CommunityViewComponent } from './community/community-view/community-view.component';
import {CommunityInfoTileComponent} from './shared/community-info-tile/community-info-tile.component';
import { CommunityFlairsTileComponent } from './shared/community-flairs-tile/community-flairs-tile.component';
import { CommunityRulesTileComponent } from './shared/community-rules-tile/community-rules-tile.component';
import { PostCreateEditComponent } from './post/post-create-edit/post-create-edit.component';
import {PostListComponent} from "./shared/post-list/post-list.component";
import { CommunityCreateEditComponent } from './community/community-create-edit/community-create-edit.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { EditUserDataComponent } from './auth/edit-user-data/edit-user-data.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { CommentReplyTileComponent } from './shared/comment-reply-tile/comment-reply-tile.component';
import { CommentCreateEditComponent } from './comment/comment-create-edit/comment-create-edit.component';
import { CommunitySuspendComponent } from './community/community-suspend/community-suspend.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { ImageComponent } from './image/image.component';
import { FlairComponent } from './shared/flair/flair.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		PostTileComponent,
		ReactionComponent,
		PostCommentsComponent,
		CommentTileComponent,
		CommunityViewComponent,
		CommunityInfoTileComponent,
		CommunityFlairsTileComponent,
		CommunityRulesTileComponent,
		PostCreateEditComponent,
		PostListComponent,
  		CommunityCreateEditComponent,
    	ChangePasswordComponent,
    	EditUserDataComponent,
     	PostViewComponent,
     	CommentReplyTileComponent,
     	CommentCreateEditComponent,
      CommunitySuspendComponent,
      ImageComponent,
      FlairComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxWebstorageModule.forRoot(),
		NgMultiSelectDropDownModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
