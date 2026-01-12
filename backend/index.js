const { connectDB } = require("./Utils/DbConnect");
const express = require("express");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/country", require("./Routes/CountryRoutes"));

app.listen(5000, () => {
  console.log("Server is running at 4000");
});
