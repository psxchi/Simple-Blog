import { Injectable } from '@angular/core';

import { DataStore } from '@aws-amplify/datastore';
import { Post, Comment, User, Upvote } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  /////////////////
  // START POSTS //
  /////////////////
  async createPost(title: string, content: string, userID: string) {
    await DataStore.save(
      new Post({
      "title": title,
      "content": content,
      "userID": userID,
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

  async deletePost(post: Post) {
    const postToDelete = await DataStore.query(Post, post.id);
    if (!postToDelete) return;
    DataStore.delete(postToDelete);
  }
  ///////////////
  // END POSTS //
  ///////////////


  ////////////////////
  // START COMMENTS //
  ////////////////////
  async createComment(content: string, userID:string, postID:string) {
    await DataStore.save(
      new Comment({
      "content": content,
      "postID": postID,
      "Upvote": [],
      "userID": userID,
    })
  );
  }

  async getComments(post:Post) {
    const comments = await DataStore.query(Comment);
    return comments.filter((value) => value.postID == post.id);
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

  async getUser(userID:string) {
    return await DataStore.query(User, userID);
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
  async addUpvote(comment: Comment, userID:string) {
    await DataStore.save(
      new Upvote({
      "upvotes": 1,
      "commentID": comment.id,
      "userID": userID
    })
  );
  }

  async addDownvote(comment: Comment, userID:string) {
    await DataStore.save(
      new Upvote({
        "upvotes": -1,
        "commentID": comment.id,
        "userID": userID,
      })
    )
  }

  async getUpvotes(comment: Comment) {
    const upvotes = await DataStore.query(Upvote, comment.id);
    console.log(upvotes?.upvotes);
  }
  
  async removeUpvote(upvote:Upvote) {
    await DataStore.query(Upvote, upvote.id);
  }
  /////////////////
  // END UPVOTES //
  /////////////////
}
