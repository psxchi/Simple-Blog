import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { User, Post, Comment } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'myamplifyapp';
  async ngOnInit() {
  }
}