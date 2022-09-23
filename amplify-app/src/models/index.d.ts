import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UpvoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Upvote {
  readonly id: string;
  readonly upvotes?: number | null;
  readonly commentID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Upvote, UpvoteMetaData>);
  static copyOf(source: Upvote, mutator: (draft: MutableModel<Upvote, UpvoteMetaData>) => MutableModel<Upvote, UpvoteMetaData> | void): Upvote;
}

export declare class Comment {
  readonly id: string;
  readonly content: string;
  readonly postID: string;
  readonly Upvote?: (Upvote | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content?: string | null;
  readonly userID: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly Posts?: (Post | null)[] | null;
  readonly Upvote?: (Upvote | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}