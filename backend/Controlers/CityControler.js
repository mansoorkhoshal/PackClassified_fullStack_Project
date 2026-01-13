const { City } = require("../Models/City");

exports.CreateCity = async (req, res) => {
  try {
    const result = await City.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllCities = async (req, res) => {
  try {
    const result = await City.find().populate("Province");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetCityById = async (req, res) => {
  try {
    const result = await City.findById(req.params.id).populate("Province");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteCity = async (req, res) => {
  try {
    const result = await City.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("City Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateCity = async (req, res) => {
  try {
    const result = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("City Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
