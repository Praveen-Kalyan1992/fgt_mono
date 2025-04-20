const { gql } = require("apollo-server");

module.exports = gql`
  input PartnerInput {
    id: ID!
    name: String!
    designation: String
    isAlive: Boolean
  }

  type Partner {
    id: ID!
    name: String!
    designation: String
    isAlive: Boolean
  }

  type Query {
        partners(
        id: ID
        name: String
        designation: String
        isAlive: Boolean
    ): [Partner]
    partnerById(id: ID): Partner
  }

  type Mutation {
    createPartner(partner: PartnerInput): Partner
  }
`;
