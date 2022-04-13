import { gql } from 'apollo-server';
export default gql`
  type Photo {
    id: String!
    user: User
    file: String!
    caption: String
    hashtags: [Hashtag]
    createdAt: String!
    updatedAt: String!
  }

  type Hashtag {
    id: String!
    hashtag: String!
    photos(page: Int!): [Photo]
    totalPhotos: Int!
    createdAt: String!
    updatedAt: String!
  }
`;