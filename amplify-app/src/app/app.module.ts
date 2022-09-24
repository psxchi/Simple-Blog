import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ui-components/post/post.component';
import { CommentComponent } from './ui-components/comment/comment.component';
import { EditRemoveDropdownComponent } from './ui-components/edit-remove-dropdown/edit-remove-dropdown.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    EditRemoveDropdownComponent,
    HomepageComponent,
    LoginpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
