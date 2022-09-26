import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  title:string | undefined;
  content:string | undefined;

  @Input()
  post!:Post

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  updateBlogPost() {
    const user = this.loginService.getUser();

    // username is the ID...
    if (!user || this.post.userID != user.username) {
      console.log('You are not the post owner');
      return;
    }

    const title = this.title ?? this.post.title!;
    const content = this.content ?? this.post.content!;
    this.blogDataService.updatePost(this.post, title, content);
  }

  ngOnInit(): void {
  }

}
