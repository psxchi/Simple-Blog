// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Upvote, Comment, Post, User } = initSchema(schema);

export {
  Upvote,
  Comment,
  Post,
  User
};