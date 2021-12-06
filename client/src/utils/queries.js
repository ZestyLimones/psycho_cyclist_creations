import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getItems {
    items {
      _id
      name
      price
      quantity
      image
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
        }
      }
    }
  }
`;
