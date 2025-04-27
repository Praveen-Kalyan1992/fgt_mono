const { gql } = require("apollo-server");

module.exports = gql`
  type SkillSet {
    id: ID!
    name: String!
  }
  input SkillSetInput {
    id: ID!
    name: String!
  }

  input TeamInput {
    id: ID!
    name: String!
    designation: String
    isAlive: Boolean
    skillSet: [SkillSetInput!]!
  }

  type Team {
    id: ID!
    name: String!
    designation: String
    isAlive: Boolean
    skillSet: [SkillSet]
  }

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
    teams(
      id: ID
      name: String
      designation: String
      isAlive: Boolean
      skillSet: [SkillSetInput]
    ): [Team]
    teamMemberById(id: ID): Team
  }

  type Mutation {
    createPartner(partner: PartnerInput): Partner
    createTeamMember(team: TeamInput): Team
  }
`;
