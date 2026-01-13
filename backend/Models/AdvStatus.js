const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const AdvStatusSchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
});

const AdvStatus = model("AdvStatus", AdvStatusSchema);
module.exports = { AdvStatus };
