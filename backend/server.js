const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter");
const productInCartRouter = require("./routers/productInCartRouter");
const empRouter = require("./routers/empRouter");
const cusRouter = require("./routers/cusRouter");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

//DB Connection
mongoose
  .connect({
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/productInCarts", productInCartRouter);
app.use("/emps", empRouter);
app.use("/customers", cusRouter);
const PORT = 5000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
