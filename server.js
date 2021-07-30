const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
const cloudflare = process.env.CLOUDFLARE === "true" || false;

app.use(cors());

app.get("/", (req, res) => {
  let response = {
    ip: req.socket.remoteAddress,
  };

  if (cloudflare) {
    response.ip = req.header("CF-Connecting-IP");
    response.country = req.header("CF-IPCountry");
  }

  return res.json(response);
});

app.listen(port, () => {
  console.log(`i app listening at http://localhost:${port}`);
  if (cloudflare) {
    console.log("! app behind Cloudflare");
  }
});
