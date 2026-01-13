const { Country } = require("../Models/Country");

exports.CreateCountry = async (req, res) => {
  try {
    let { Name } = req.body;
    const result = await Country.create({ Name });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllCountries = async (req, res) => {
  try {
    // let { Name } = req.body;
    const result = await Country.find();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetCountryById = async (req, res) => {
  try {
    const result = await Country.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteCountry = async (req, res) => {
  try {
    const result = await Country.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("Country Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateCountry = async (req, res) => {
  try {
    const result = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (result) {
      return res.status(200).json("Country Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
