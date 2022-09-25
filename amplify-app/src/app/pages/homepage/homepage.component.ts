import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { Post, Comment, User } from 'src/models';

import { Auth } from 'aws-amplify';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blogPosts!: Post[];
  comments!: Comment[];
  users!: User[];
  constructor(private blogDataService: BlogDataService, private loginService: LoginService) { }

  async waitCreateComment() {
    this.blogPosts = await this.blogDataService.getPosts();
    this.users = await this.blogDataService.getUsers();

    console.log(this.blogPosts);
    console.log(this.users);

    console.log(this.blogPosts[0]);
    console.log(this.users[0]);

    await this.blogDataService.createComment('test comment',
    this.users[0],
    this.blogPosts[0],
    );

    console.log(this.comments);

  }

  ngOnInit(): void {
    this.blogDataService.getPosts().then((posts) => this.blogPosts = posts);

    console.log(`user => '${this.loginService.getUser()}'`);

    //this.waitCreateComment();
  }
}
