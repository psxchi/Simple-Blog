import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ui-components/post/post.component';
import { CommentComponent } from './ui-components/comment/comment.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { CreatePostComponent } from './ui-components/create-post/create-post/create-post.component';
import { EditpostComponent } from './ui-components/edit-post/editpost/editpost.component';
import { CreateCommentComponent } from './ui-components/create-comment/create-comment/create-comment.component';
import { EditcommentComponent } from './ui-components/edit-comment/editcomment/editcomment.component';
import { EditRemovePostDropdownComponent } from './ui-components/edit-remove-post-dropdown/edit-remove-post-dropdown/edit-remove-post-dropdown.component';
import { EditRemoveCommentDropdownComponent } from './ui-components/edit-remove-comment-dropdown/edit-remove-comment-dropdown/edit-remove-comment-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    HomepageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    CreatePostComponent,
    EditpostComponent,
    CreateCommentComponent,
    EditcommentComponent,
    EditRemovePostDropdownComponent,
    EditRemoveCommentDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
