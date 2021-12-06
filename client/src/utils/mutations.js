import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
    addOrder($items: [ID]!) {
        addOrder(items: $items) {
            purchaseDate
            items {
                _id
                name
                price
                quantity
                description 
            }
        }
    }
`;
