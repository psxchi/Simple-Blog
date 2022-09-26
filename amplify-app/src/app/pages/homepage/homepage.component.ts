import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { Post, Comment, User } from 'src/models';

import { Auth } from 'aws-amplify';
import { LoginService } from 'src/app/services/login/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blogPosts!: Post[];
  comments!: Comment[];
  users!: User[];

  constructor(private loginService:LoginService, private blogDataService: BlogDataService, private appComponent:AppComponent) { }

  isUserLoggedin() {
    return this.loginService.getUser() !== undefined;
  }

  ngOnInit(): void {
    this.blogDataService.getPosts().then((posts) => this.blogPosts = posts);
    this.appComponent.adjustLoggedin();
  }
}
