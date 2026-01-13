const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const advertismentSchema = new Schema({
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  price: {
    type: SchemaTypes.String,
    required: true,
  },
  description: {
    type: SchemaTypes.String,
    required: true,
  },
  startsOn: {
    type: SchemaTypes.String,
    required: true,
  },
  endsOn: {
    type: SchemaTypes.String,
    required: true,
  },
  advImage: {
    type: SchemaTypes.String,
    required: true,
    ref: "AdvImages",
  },
  cityArea: {
    type: SchemaTypes.String,
    required: true,
    ref: "CityArea",
  },
  advStatus: {
    type: SchemaTypes.String,
    required: true,
    ref: "AdvStatus",
  },
  advType: {
    type: SchemaTypes.String,
    required: true,
    ref: "AdvType",
  },
  user: {
    type: SchemaTypes.String,
    required: true,
    ref: "User",
  },
  subCategory: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "AdvSubCategory",
  },
});

const Advertisment = model("Advertisment", advertismentSchema);
module.exports = { Advertisment };
