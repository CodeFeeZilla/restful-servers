const express = require("express");

const rootRoutes = require("./routes/rootRoutes");

const app = express();

const port = process.env.PORT || 8080;

// root routes
app.use("/", rootRoutes);

app.listen(port, (error) => {
  if (error) console.log(error);
  console.log(`App is running on http://localhost:${port}`);
});
