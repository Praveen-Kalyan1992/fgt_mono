const _ = require("lodash");

module.exports = {
  partners: (parent, args, { dataSources }, info) => {
    const allPartners = dataSources.partnerDataSource.getPartners();
    return allPartners;
  },
  partnerById: (parent, { id }, { dataSources }, info) => {
    const partner = dataSources.partnerDataSource.getPartnerById(id);
    return partner;
  },
  teams: (parent, args, { dataSources }, info) => {
    const allMembers = dataSources.teamsDataSource.getTeamMembers();
    return allMembers;
  },
  teamMemberById: (parent, { id }, { dataSources }, info) => {
    const partner = dataSources.teamsDataSource.getMemberById(id);
    return partner;
  },
//   speakers: async (parent, args, { dataSources }, info) => {
//     const allSpeakers = await dataSources.speakerDataSource.getSpeakers(args);
//     return allSpeakers;
//   },
//   speakerById: async (parent, { id }, { dataSources }, info) => {
//     const speaker = await dataSources.speakerDataSource.getSpeakerById(id);
//     return speaker;
//   },
//   users: async (parent, args, context, info) => {
//     const users = await context.dataSources.userDataSource.getUsers();
//     return users;
//   },
//   userById: async (parent, { id }, { dataSources }, info) => {
//     const user = await dataSources.userDataSource.getUserById(id);
//     return user;
//   },
//   me: async (parent, { id }, { dataSources, user }, info) => {
//     if (user) {
//       return dataSources.userDataSource.getUserById(user.sub);
//     }
//     return undefined;
//   },
};
