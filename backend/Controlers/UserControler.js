const { User } = require("../Models/User");

exports.CreateUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllUser = async (req, res) => {
  try {
    const result = await User.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetUserById = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("User Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("User Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
