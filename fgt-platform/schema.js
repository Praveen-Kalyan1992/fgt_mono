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
  type SupportingDescription {
    id: ID!
    name: String!
  }
  input SupportingDescriptionInput {
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
  input FeatureInput {
    id: ID!
    name: String!
    description: String
    isActive: Boolean
    supportingDescription: [SupportingDescriptionInput!]!
  }
  type Team {
    id: ID!
    name: String!
    designation: String
    isAlive: Boolean
    skillSet: [SkillSet]
  }

  type Feature {
    id: ID!
    name: String!
    description: String
    isActive: Boolean
    supportingDescription: [SupportingDescription]
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
    features(
      id: ID
      name: String
      description: String
      isActive: Boolean
      supportingDescription: [SupportingDescriptionInput]
    ): [Feature]
    featureById(id: ID): Feature
  }

  type Mutation {
    createPartner(partner: PartnerInput): Partner
    createTeamMember(team: TeamInput): Team
    createFeature(feature: FeatureInput): Feature
  }
`;
