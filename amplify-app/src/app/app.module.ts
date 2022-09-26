import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ui-components/post/post.component';
import { CommentComponent } from './ui-components/comment/comment.component';
import { EditRemoveDropdownComponent } from './ui-components/edit-remove-dropdown/edit-remove-dropdown.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { CreatePostComponent } from './ui-components/create-post/create-post/create-post.component';
import { EditpostComponent } from './ui-components/edit-post/editpost/editpost.component';
import { CreateCommentComponent } from './ui-components/create-comment/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    EditRemoveDropdownComponent,
    HomepageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    CreatePostComponent,
    EditpostComponent,
    CreateCommentComponent,
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
