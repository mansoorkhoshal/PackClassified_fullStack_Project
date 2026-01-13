const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const AdvCategorySchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
});

const AdvCategory = model("AdvCategory", AdvCategorySchema);
module.exports = { AdvCategory };
