const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const advTypeSchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
});

const AdvType = model("AdvType", advTypeSchema);
module.exports = { AdvType };
