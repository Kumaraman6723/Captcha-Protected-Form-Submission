const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/upload", async function (req, res) {
  const params = new URLSearchParams({
    secret: "6Le-jwEqAAAAAK0zyJ2LTO2hr7J8pU_ZOVesNc1E",
    response: req.body["g-recaptcha-response"],
    remoteip: req.ip,
  });

  try {
    const fetch = (await import("node-fetch")).default;

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        body: params,
      }
    );
    const data = await response.json();

    if (data.success) {
      res.json({ captchaSuccess: true });
    } else {
      res.json({ captchaSuccess: false });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ captchaSuccess: false, error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
