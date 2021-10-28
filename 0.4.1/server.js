const express = require("express");
const sequelize = require("./sequelize");

const rootRoutes = require("./routes/rootRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static("views"));

app.set("view engine", "ejs");

// body parser
app.use(express.urlencoded({ extended: true }));

// root routes
app.use("/", rootRoutes);

// api routes
app.use("/api", apiRoutes);

app.listen(port, (error) => {
  if (error) console.log(error);
  console.log(`App is running on http://localhost:${port}`);
  sequelize.sync();
});
