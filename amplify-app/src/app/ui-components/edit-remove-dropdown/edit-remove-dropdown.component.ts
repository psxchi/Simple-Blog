import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-edit-remove-dropdown',
  templateUrl: './edit-remove-dropdown.component.html',
  styleUrls: ['./edit-remove-dropdown.component.css']
})
export class EditRemoveDropdownComponent implements OnInit {
  isEditPostEnabled: boolean = false;

  @Input()
  post!:Post;

  constructor(private loginService:LoginService, private blogDataService:BlogDataService) { }

  editPostEnabled() {
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
