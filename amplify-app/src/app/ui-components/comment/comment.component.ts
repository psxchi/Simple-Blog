import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data/blog-data.service';
import { Comment } from 'src/models/index';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  username:string = '';
  upvotes: number = 0;

  @Input()
  comment!: Comment;

  constructor() {
  }



  ngOnInit(): void {
  }

}
