import { gql } from 'apollo-server-lambda';

export const query = gql`
  type Query {
    posts: [Post]
  }
`;