const { CityArea } = require("../Models/CityArea");

exports.CreateCityArea = async (req, res) => {
  try {
    const result = await CityArea.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllCitiesArea = async (req, res) => {
  try {
    const result = await CityArea.find().populate("City");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetCityAreaById = async (req, res) => {
  try {
    const result = await CityArea.findById(req.params.id).populate("City");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteCityArea = async (req, res) => {
  try {
    const result = await CityArea.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("CityArea Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateCityArea = async (req, res) => {
  try {
    const result = await CityArea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("CityArea Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
