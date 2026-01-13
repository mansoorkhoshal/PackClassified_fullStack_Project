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
app.use("/api/user", require("./Routes/UserRoutes"));
app.use("/api/advcategory", require("./Routes/AdvCategoryRoutes"));
app.use("/api/advsubcategory", require("./Routes/AdvSubCategoryRoutes"));
app.use("/api/advimages", require("./Routes/AdvImagesRoutes"));
app.use("/api/advertisment", require("./Routes/AdvertismentRoutes"));

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
