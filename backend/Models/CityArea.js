const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const cityAreaSchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
  City: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "City",
  },
});

const CityArea = model("CityArea", cityAreaSchema);
module.exports = { CityArea };
