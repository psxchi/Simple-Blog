import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Comment } from 'src/models/index';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  username:string = '';
  upvotes: number = 0;
  isOptionsVisible: boolean = false;

  @Input()
  comment!: Comment;

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  upvoteClick() {
    const user = this.loginService.getUser();
    if (!user) return;

    this.blogDataService.addUpvote(this.comment, user.username);
    (console.log('added upvote'))
  }

  downvoteClick() {
    const user = this.loginService.getUser();
    if (!user) return;

    this.blogDataService.addDownvote(this.comment, user.username);
  }


  showOptions() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  isCommentOwner() {
    const user = this.loginService.getUser();
    if (!user || user.username != this.comment.userID) return false;
    return true;
  }

  ngOnInit(): void {
    this.blogDataService.getUpvotes(this.comment);
  }

}
