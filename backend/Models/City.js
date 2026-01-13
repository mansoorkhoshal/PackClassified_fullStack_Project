const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const citySchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
  Province: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "Province",
  },
});

const City = model("City", citySchema);
module.exports = { City };
