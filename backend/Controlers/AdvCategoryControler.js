const { AdvCategory } = require("../Models/AdvCategory");

exports.CreateAdvCategory = async (req, res) => {
  try {
    const result = await AdvCategory.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvCategory = async (req, res) => {
  try {
    const result = await AdvCategory.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvCategoryById = async (req, res) => {
  try {
    const result = await AdvCategory.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvCategory = async (req, res) => {
  try {
    const result = await AdvCategory.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("AdvCategory Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvCategory = async (req, res) => {
  try {
    const result = await AdvCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (result) {
      return res.status(200).json("AdvCategory Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
