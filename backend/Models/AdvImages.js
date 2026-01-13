const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const AdvImagesSchema = new Schema({
  image: {
    type: SchemaTypes.String,
    required: true,
  },
  rank: {
    type: SchemaTypes.String,
    required: true,
  },
  caption: {
    type: SchemaTypes.String,
    required: true,
  },
});

const AdvImages = model("AdvImages", AdvImagesSchema);
module.exports = { AdvImages };
