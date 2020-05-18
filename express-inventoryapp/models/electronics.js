var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ElectronicsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
});

ElectronicsSchema.virtual("url").get(function () {
  return "/catalog/electronics" + this._id;
});

module.exports = mongoose.model("Electronics", ElectronicsSchema);
