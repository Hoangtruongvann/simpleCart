const schema = require("../models/schema");

exports.getAll = async (req, res, next) => {
  try {
    const carts = schema.Carts;
    const Carts = await carts.find({}).exec((err, cartsData) => {
      if (err) throw err;
      if (cartsData) {
        res.send(cartsData);
      } else {
        res.end();
      }
    });
  } catch (err) {
    throw err;
  }
};
exports.createOne = (req, res, next) => {
  try {
    schema.Carts.insertMany([{}], function (err) {});
  } catch (err) {
    throw err;
  }
};
