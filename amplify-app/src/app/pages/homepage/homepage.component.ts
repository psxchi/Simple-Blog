import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blogPosts: any;
  comments: any;
  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogDataService.getPosts();
    console.log(this.blogPosts);

    this.comments = this.blogDataService.getComments();
    console.log(this.comments);

    console.log(this.blogDataService.getUsers());

    console.log(this.blogDataService.getComments());
  }

}
