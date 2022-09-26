import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from 'aws-amplify';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Post, Comment } from 'src/models/index';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comments!: Comment[];
  isCommentVisible: boolean = false;
  isOptionVisible: boolean = false;
  isPostOwner: boolean = false;
  isCommentTabOpen: boolean = false;

  @Input()
  post!: Post;

  constructor(private loginService:LoginService, private blogDataService: BlogDataService, private router:Router) {
    DataStore.observe(this.post).subscribe(() => { this.router.navigate(['/']); });
  }

  isUserLoggedin() {
    return this.loginService.getUser() !== undefined;
  } 

  openCommentTab() {
    console.log('ye it open')
    this.isCommentTabOpen = !this.isCommentTabOpen;
  }

  async getPostOwner() {
    if (!this.post) return;

    const user = this.loginService.getUser();
    if (!user) return
    if (user.username != this.post.userID) return;

    this.isPostOwner = true;
  }

  showOptions() {
    this.isOptionVisible = !this.isOptionVisible;
  }

  async showComments() {
    if (!this.comments) {
      this.blogDataService.getComments(this.post)
        .then((comments) => {
          this.comments = comments;
        });
    }

    if (this.isCommentVisible) {
      this.isCommentVisible = false;
      return;
    }

    this.isCommentVisible = true;
  }

  expandIfCommentsVisible() {
    if (!this.isCommentVisible || !this.comments) return {}

    return {
      'height': `${this.comments.length * 155 + 300}px`
    }
  }
  
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    
    this.getPostOwner();
  }
}
