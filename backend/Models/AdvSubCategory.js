const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const advSubCategorySchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
  Category: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "Category",
  },
});

const AdvSubCategory = model("AdvSubCategory", advSubCategorySchema);
module.exports = { AdvSubCategory };
