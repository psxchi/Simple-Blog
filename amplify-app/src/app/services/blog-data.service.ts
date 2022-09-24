import { Injectable } from '@angular/core';

import { DataStore } from '@aws-amplify/datastore';
import { Post, Comment, User, Upvote } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  async getPosts() {
    return await DataStore.query(Post);
  }

  async getComments(/*post: Post*/) {
    return await DataStore.query(Comment);
  }

  async getUsers() {
    return await DataStore.query(User);
  }

  async getUpvotes() {
    return await DataStore.query(Upvote);
  }
}
