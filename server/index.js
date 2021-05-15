const express = require("express");

const PORT = 3000;

const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
