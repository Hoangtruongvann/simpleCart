const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: String, required: true },
  _name: { type: String, required: true },
  _cost: { type: Number, default: 0 },
});
const empSchema = new Schema({
  _id: { type: String, default: Date.now },
  _name: { type: String, required: true },
  _role: { type: String, required: true },
});
const cusSchema = new Schema({
  _id: { type: String, default: Date.now },
  _name: { type: String, required: true },
  _addr: { type: String, required: true },
});
// const cartSchema = new Schema({
//   _id: { type: String, default: Date.now },
//   _dateCreate: { type: Date, default: Date.now },
// });

// const itemInCartSchema = new Schema({
//   _idCart: { type: String, required: true },
//   _name: { type: String, required: true },
//   _cost: { type: Number, default: 0 },
//   _quantity: { type: Number, default: 0 },
//   _subTotal: { type: Number, default: 0 },
// });

const Products = mongoose.model("products", productSchema, "products");
// const Carts = mongoose.model("carts", cartSchema, "carts");
// const ItemInCarts = mongoose.model(
//   "itemInCarts",
//   itemInCartSchema,
//   "itemInCarts"
// );
const Emps = mongoose.model("emps", empSchema, "emps");
const Customers = mongoose.model("customers", cusSchema, "customers");
const mySchemas = {
  Products: Products,
  Emps: Emps,
  Customers: Customers,
  // Carts: Carts,
  // ItemInCarts: ItemInCarts,
};

module.exports = mySchemas;
