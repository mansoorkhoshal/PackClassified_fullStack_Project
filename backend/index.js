const { connectDB } = require("./Utils/DbConnect");
const express = require("express");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/country", require("./Routes/CountryRoutes"));
app.use("/api/province", require("./Routes/ProvinceRoutes"));
app.use("/api/city", require("./Routes/CityRoutes"));
app.use("/api/cityarea", require("./Routes/CityAreaRoutes"));
app.use("/api/advstatus", require("./Routes/AdvStatusRoutes"));
app.use("/api/advtype", require("./Routes/AdvTypeRoutes"));
app.use("/api/role", require("./Routes/RoleRoutes"));

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
