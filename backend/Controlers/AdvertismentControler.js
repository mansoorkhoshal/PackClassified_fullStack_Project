const { Advertisment } = require("../Models/Advertisment");

exports.CreateAdvertisment = async (req, res) => {
  try {
    const result = await Advertisment.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvertisment = async (req, res) => {
  try {
    const result = await Advertisment.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvertismentById = async (req, res) => {
  try {
    const result = await Advertisment.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvertisment = async (req, res) => {
  try {
    const result = await Advertisment.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("Advertisment Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvertisment = async (req, res) => {
  try {
    const result = await Advertisment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("Advertisment Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
