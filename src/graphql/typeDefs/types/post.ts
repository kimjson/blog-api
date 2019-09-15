import { gql } from 'apollo-server-lambda';

export const postType = gql`
  type Post {
    id: Int!
    title: String!
    content: String!
    summary: String!
    category: String!
    slug: String!
    createdAt: String!
  }
`;
