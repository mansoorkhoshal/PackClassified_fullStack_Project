const { connectDB } = require("./Utils/DbConnect");
const express = require("express");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/country", require("./Routes/CountryRoutes"));
app.use("/api/province", require("./Routes/ProvinceRoutes"));

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
