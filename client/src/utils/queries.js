import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query items {
    items {
      _id
      name
      price
      quantity
      image
      description
    }
  }
  query user($username: String!) {
    user(username: $username) {
      _id
      firstName
      lastName
      username
      orders {
        _id
        purchaseDate
        items {
          _id
          name
          price
          quantity
          image
          description
        }
      }
    }
  }
`;
