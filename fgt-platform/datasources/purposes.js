const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./fgt-data/purposes.json");
const db = low(adapter);
db._.mixin(lodashId);

class PurposeDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("purposes");
  }

  getPurposes() {
    return this.db.value();
  }

  getPurposeById(id) {
    return this.db.getById(id).value();
  }

  createPurpose(purpose) {
    return this.db.insert(purpose).write();
  }
}

module.exports = PurposeDataSource;
