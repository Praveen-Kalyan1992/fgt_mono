const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./fgt-data/partners.json");
const db = low(adapter);
db._.mixin(lodashId);

class PartnerDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("partners");
  }

  getPartners() {
    // return this.db.filter(args).value();
    return this.db.value();
  }

  getPartnerById(id) {
    return this.db.getById(id).value();
  }

  createPartner(partner) {
    return this.db.insert(partner).write();
  }
}

module.exports = PartnerDataSource;
