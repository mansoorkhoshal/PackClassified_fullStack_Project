const { AdvImages } = require("../Models/AdvImages");

exports.CreateAdvImages = async (req, res) => {
  try {
    const result = await AdvImages.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvImages = async (req, res) => {
  try {
    const result = await AdvImages.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvImagesById = async (req, res) => {
  try {
    const result = await AdvImages.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvImages = async (req, res) => {
  try {
    const result = await AdvImages.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("AdvImages Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvImages = async (req, res) => {
  try {
    const result = await AdvImages.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("AdvImages Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
