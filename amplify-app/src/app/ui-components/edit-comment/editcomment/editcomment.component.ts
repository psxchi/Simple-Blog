import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Comment } from 'src/models';

@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})
export class EditcommentComponent implements OnInit {
  content:string | undefined;

  @Input()
  comment!:Comment;

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  updateComment() {
    const user = this.loginService.getUser();

    // username is the ID...
    if (!user || this.comment.userID != user.username) {
      console.log('You are not the comment owner');
      return;
    }

    const content = this.content ?? this.comment.content!;
    this.blogDataService.updateComment(this.comment, content);
  }
  ngOnInit(): void {
  }

}
