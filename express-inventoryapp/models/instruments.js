var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
});

InstrumentSchema.virtual("url").get(function () {
  return "/catalog/instruments" + this._id;
});

module.exports = mongoose.model("Instrument", InstrumentSchema);
