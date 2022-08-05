const schema = require("../models/schema");

exports.getAll = async (req, res, next) => {
  try {
    const cus = schema.Customers;

    const Cus = await cus.find({}).exec((err, cusData) => {
      if (err) throw err;
      if (cusData) {
        res.send(cusData);
      } else {
        res.end();
      }
    });
  } catch (err) {
    throw err;
  }
};
