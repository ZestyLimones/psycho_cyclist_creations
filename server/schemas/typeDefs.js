const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
