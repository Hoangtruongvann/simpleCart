const schema = require("../models/schema");

exports.getAll = async (req, res, next) => {
  try {
    const emps = schema.Emps;

    const Emps = await emps.find({}).exec((err, empsData) => {
      if (err) throw err;
      if (empsData) {
        res.send(empsData);
      } else {
        res.end();
      }
    });
  } catch (err) {
    throw err;
  }
};
