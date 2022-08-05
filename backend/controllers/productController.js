const schema = require("../models/schema");

exports.getAll = async (req, res, next) => {
  try {
    const products = schema.Products;

    const Products = await products.find({}).exec((err, productsData) => {
      if (err) throw err;
      if (productsData) {
        res.send(productsData);
      } else {
        res.end();
      }
    });
  } catch (err) {
    throw err;
  }
};
