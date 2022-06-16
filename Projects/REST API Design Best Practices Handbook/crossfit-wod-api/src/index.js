/* Configure Express */
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

/* testing */
app.get("/", (req, res) => {
  res.send("<h2>Hello World!</h2>");
});
