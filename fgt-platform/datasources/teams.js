const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./fgt-data/teams.json");
const db = low(adapter);
db._.mixin(lodashId);

class TeamsDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("teams");
  }

  getTeamMembers() {
    // return this.db.filter(args).value();
    return this.db.value();
  }

  getMemberById(id) {
    return this.db.getById(id).value();
  }

  createTeamMember(member) {
    return this.db.insert(member).write();
  }
}

module.exports = TeamsDataSource;
