const express = require("express");
const geoip = require("geoip-country");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    ip: req.ip,
    country: geoip.lookup(req.ip)?.country || null,
  });
});

app.listen(port, () => {
  console.log(`i app listening at http://localhost:${port}`);
});
