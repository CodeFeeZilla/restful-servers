const express = require("express");
const sequelize = require("./sequelize");
const restaurantRouter = require("./routes/restaurant/restaurantApi");
const menuRouter = require("./routes/menu/menuApi");
const cors = require("cors");
// const menuItemApi = require("./routes/menuItemApi");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// restaurant api routes
app.use("/api/restaurants", restaurantRouter);
app.use("/api/menus", menuRouter);

async function start() {
  await sequelize.sync({
    logging: false,
    // alter: true,
    // force: true,
  });
}

start()
  .then(() => console.log("success"))
  .catch((error) => console.error("failure:", error));

app.listen(port, (error) => {
  if (error) console.log("Error:", error);
  console.log(`App running on https://localhost:${port}`);
});
