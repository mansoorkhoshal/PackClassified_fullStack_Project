const { AdvType } = require("../Models/AdvType");

exports.CreateAdvType = async (req, res) => {
  try {
    const result = await AdvType.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAllAdvType = async (req, res) => {
  try {
    const result = await AdvType.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.GetAdvTypeById = async (req, res) => {
  try {
    const result = await AdvType.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.DeleteAdvType = async (req, res) => {
  try {
    const result = await AdvType.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json("AdvType Deleted Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.UpdateAdvType = async (req, res) => {
  try {
    const result = await AdvType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (result) {
      return res.status(200).json("AdvType Updated Successfuly");
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
