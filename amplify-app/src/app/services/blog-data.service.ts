import { Injectable } from '@angular/core';

import { DataStore } from '@aws-amplify/datastore';
import { Post, Comment, User, Upvote } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  /////////////////
  // START POSTS //
  /////////////////
  async createPost(title: string, content: string, user: User) {
    await DataStore.save(
      new Post({
      "title": title,
      "content": content,
      "userID": user.id,
      "Comments": []
    })
  );
  }


  async getPosts() {
    return await DataStore.query(Post);
  }


  async updatePost(post: Post, title?: string, content?: string, comment?: Comment) {
    await DataStore.save(Post.copyOf(post, item => {
      if (title) item.title = title;
      if (content) item.content = content;
      if (comment) item.Comments?.push(comment);
    }));
  }

  async removePost(post: Post) {
    await DataStore.query(Post, post.id);
  }
  ///////////////
  // END POSTS //
  ///////////////


  ////////////////////
  // START COMMENTS //
  ////////////////////
  async createComment(content: string, user: User, post: Post) {
    await DataStore.save(
      new Comment({
      "content": content,
      "postID": post.id,
      "Upvote": [],
      "userID": user.id,
    })
  );
  }

  async getComments() {
    return await DataStore.query(Comment);
  }

  async updateComment(comment: Comment, content: string) {
    await DataStore.save(Comment.copyOf(comment, item => {
      item.content = content;
    }));
  }

  async deleteComment(comment: Comment) {
    await DataStore.query(Comment, comment.id);
  }
  //////////////////
  // END COMMENTS //
  //////////////////


  /////////////////
  // START USERS //
  /////////////////
  async createUser(username: string, email: string, password: string) {
    await DataStore.save(
      new User({
      "username": username,
      "email": email,
      "password": password,
      "Posts": [],
      "Upvote": [],
      "Comments": []
    })
  );
  }

  async getUsers() {
    return await DataStore.query(User);
  }

  async updateUser(user: User, username?: string, email?: string, password?: string) {
    await DataStore.save(User.copyOf(user, item => {
      if (username) item.username = username;
      if (email) item.email = email;
      if (password) item.password = password;
    }));
  }

  async deleteUser(user: User) {
    await DataStore.query(User, user.id);
  }
  ///////////////
  // END USERS //
  ///////////////



  ///////////////////
  // START UPVOTES //
  ///////////////////
  async addUpvote(comment: Comment, user: User) {
    await DataStore.save(
      new Upvote({
      "upvotes": 1,
      "commentID": comment.id,
      "userID": user.id
    })
  );
  }

  async getUpvotes(comment: Comment) {
    return await DataStore.query(Upvote, comment.id);
  }
  
  async removeUpvote(upvote:Upvote) {
    await DataStore.query(Upvote, upvote.id);
  }
  /////////////////
  // END UPVOTES //
  /////////////////

}
