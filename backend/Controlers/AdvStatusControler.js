const { AdvStatus } = require("../Models/AdvStatus");

exports.CreateAdvStatus = async (req, res) => {
  try {
    const result = await AdvStatus.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvStatus = async (req, res) => {
  try {
    const result = await AdvStatus.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvStatusById = async (req, res) => {
  try {
    const result = await AdvStatus.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvStatus = async (req, res) => {
  try {
    const result = await AdvStatus.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("AdvStatus Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvStatus = async (req, res) => {
  try {
    const result = await AdvStatus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("AdvStatus Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
