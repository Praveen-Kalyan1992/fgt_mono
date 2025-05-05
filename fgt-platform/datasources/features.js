const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./fgt-data/features.json");
const db = low(adapter);
db._.mixin(lodashId);

class FeaturesDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("features");
  }

  getFeatures() {
    return this.db.value();
  }

  getFeatureById(id) {
    return this.db.getById(id).value();
  }

  createFeature(feature) {
    return this.db.insert(feature).write();
  }
}

module.exports = FeaturesDataSource;
