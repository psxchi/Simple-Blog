import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { Post, Comment } from 'src/models/index';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comments!: Comment[];
  isCommentVisible: boolean = false;

  @Input()
  post!: Post;

  constructor(private blogDataService: BlogDataService) {}

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
    if (!this.isCommentVisible) return {}

    return {
      'height': `${this.comments.length * 100 + 410}px`
    }
  }
  
  ngOnInit(): void {
  }
}
