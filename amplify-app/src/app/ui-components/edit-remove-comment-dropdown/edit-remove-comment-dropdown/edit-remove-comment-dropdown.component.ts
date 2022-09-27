import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Comment } from 'src/models';

@Component({
  selector: 'app-edit-remove-comment-dropdown',
  templateUrl: './edit-remove-comment-dropdown.component.html',
  styleUrls: ['./edit-remove-comment-dropdown.component.css']
})
export class EditRemoveCommentDropdownComponent implements OnInit {
  isEditCommentEnabled: boolean = false;

  @Input()
  comment!:Comment;

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  editEnabled() {
    this.isEditCommentEnabled = !this.isEditCommentEnabled;
  }

  removeComment() {
    const user = this.loginService.getUser();

    // username is the ID...
    if (!user || this.comment.userID != user.username) {
      console.log('you are not the post owner');
      return;
    }

    this.blogDataService.deleteComment(this.comment);
  }

  ngOnInit(): void {
  }

}
