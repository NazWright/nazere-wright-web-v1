// require in dependencies ... express, etc.
const express = require("express");
const webPush = require("web-push");

// initialize server here
const app = express();
const PUBLIC_VAPID_KEY =
  "BNIi4HYbIShAxUIHIh70I9cMOkOUZZ4shJOcLGv6b_n28XjsQsKuzmk-kYRSUrvTWj3x-CwMzix-P5GP-LWaEpo";
const PRIVATE_VAPID_KEY = "usZBqkFBmIiKzo7FxVRUVUYAY_DJOqY7NR4QtJfuKOM";

webPush.setVapidDetails(
  "mailto:nazwrightthedeveloper@gmail.com",
  PUBLIC_VAPID_KEY,
  PRIVATE_VAPID_KEY
);

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // making sure express will serve up production assets
  app.use(express.static("frontend/build"));
  // express will serve up index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.post("/subscribe", (req, res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: "Hello" });

  webPush
    .sendNotification(subscription, payload)
    .catch((error) => console.error(error));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening"));
module.exports = app;
