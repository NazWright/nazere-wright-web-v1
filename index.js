// require in dependencies ... express, etc.
const express = require("express");

// initialize server here
const app = express();

app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   // making sure express will serve up production assets
//   app.use(express.static("frontend/build"));
//   // express will serve up index.html
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening"));
module.exports = app;
