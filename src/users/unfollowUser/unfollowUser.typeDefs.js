import { gql } from 'apollo-server';

export default gql`
  type UnfollowUserResult {
    ok: Boolean!
    msg: String
  }

  type Mutation {
    unfollowUser(username: String!): UnfollowUserResult!
  }
`;
