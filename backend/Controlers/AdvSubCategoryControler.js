const { AdvSubCategory } = require("../Models/AdvSubCategory");

exports.CreateAdvSubCategory = async (req, res) => {
  try {
    const result = await AdvSubCategory.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvSubCategory = async (req, res) => {
  try {
    const result = await AdvSubCategory.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvSubCategoryById = async (req, res) => {
  try {
    const result = await AdvSubCategory.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvSubCategory = async (req, res) => {
  try {
    const result = await AdvSubCategory.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("AdvSubCategory Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvSubCategory = async (req, res) => {
  try {
    const result = await AdvSubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (result) {
      return res.status(200).json("AdvSubCategory Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
