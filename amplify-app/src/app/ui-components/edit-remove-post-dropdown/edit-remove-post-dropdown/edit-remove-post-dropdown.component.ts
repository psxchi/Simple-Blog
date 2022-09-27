import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-edit-remove-post-dropdown',
  templateUrl: './edit-remove-post-dropdown.component.html',
  styleUrls: ['./edit-remove-post-dropdown.component.css']
})
export class EditRemovePostDropdownComponent implements OnInit {
  isEditPostEnabled: boolean = false;

  @Input()
  post!:Post;


  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  editEnabled() {
    this.isEditPostEnabled = !this.isEditPostEnabled;
  }

  removePost() {
    const user = this.loginService.getUser();

    // username is the ID...
    if (!user || this.post.userID != user.username) {
      console.log('you are not the post owner');
      return;
    }

    this.blogDataService.deletePost(this.post);
  }
  ngOnInit(): void {
  }

}
