import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  title:string = '';
  content:string = '';

  @Input()
  post!:Post;

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  createComment() {
    const user = this.loginService.user;

    if(!user) {
      console.log('there is no user... Login to post comments')
      return;
    }

    this.blogDataService.createComment(this.content, user.username, this.post.id);
  }
  
  ngOnInit(): void {
  }

}
