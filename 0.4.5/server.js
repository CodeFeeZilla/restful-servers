const express = require("express");
const sequelize = require("./sequelize");
const restaurantApi = require("./routes/restaurantApi");
const menuApi = require("./routes/menuApi");
const menuItemApi = require("./routes/menuItemApi");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// restaurant api routes
app.use("/api/restaurants", restaurantApi);

// menu api
app.use("/api/menu", menuApi);

app.use("/api/menu-item", menuItemApi);

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
