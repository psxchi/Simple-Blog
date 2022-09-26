import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/models';
import { CognitoUser } from 'src/models/cognito-user';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title:string = '';
  content:string = '';

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  createBlogPost() {

    const user = this.loginService.user;

    if(!user) {
      console.log('there is no user... Login to post blogs')
      return;
    }
    this.blogDataService.createPost(this.title, this.content, user.username);
  }

  ngOnInit(): void {
  }

}
