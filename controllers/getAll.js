const { Contact } = require("../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }, "name email phone");
  res.json(result);
};

module.exports = getAll;
