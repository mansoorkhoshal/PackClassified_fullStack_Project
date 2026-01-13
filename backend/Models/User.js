const mongoose = require("mongoose");

const { Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: SchemaTypes.String,
    required: true,
  },
  // lastName: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  email: {
    type: SchemaTypes.String,
    required: true,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  // contactNo: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  // dateOfBirth: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  image: {
    type: SchemaTypes.String,
    required: true,
    // required: true,
  },
  // securityQuestion: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  // sequrityAnswer: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  // address: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },
  // role: {
  //   type: SchemaTypes.ObjectId,
  //   required: true,
  //   ref: "Role",
  // },
});

const User = model("User", userSchema);
module.exports = { User };
