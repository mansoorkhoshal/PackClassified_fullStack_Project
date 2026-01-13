const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const roleSchema = new Schema({
  Name: {
    type: SchemaTypes.String,
    required: true,
  },
});

const Role = model("Role", roleSchema);
module.exports = { Role };
