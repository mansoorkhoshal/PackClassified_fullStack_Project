const { Province } = require("../Models/Province");

exports.createProvince = async (req, res) => {
  try {
    const result = await Province.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllProvince = async (req, res) => {
  try {
    const result = await Province.find().populate("Country");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Province Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetProvinceById = async (req, res) => {
  try {
    const result = await Province.findById(req.params.id).populate("Country");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteProvince = async (req, res) => {
  try {
    const result = await Province.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json("Province Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.UpdateProvince = async (req, res) => {
  try {
    const result = await Province.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (result) {
      res.status(200).json("Province Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
