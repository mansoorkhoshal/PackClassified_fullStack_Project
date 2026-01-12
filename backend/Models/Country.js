const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const countrySchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
});

const Country = model("Country", countrySchema);
module.exports = { Country };
