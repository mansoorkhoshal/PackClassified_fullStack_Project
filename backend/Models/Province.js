const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = require("mongoose");

const provinceSchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
  Country: {
    type: SchemaTypes.ObjectId,
    ref: "Country",
    required: true,
  },
});

const Province = model("Province", provinceSchema);
module.exports = { Province };
