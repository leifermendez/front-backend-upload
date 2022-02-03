const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(cors());

app.use(express.static("./public"));

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  filename: function (res, file, cb) {
    const ext = file.originalname.split(".").pop(); //TODO pdf / jpeg / mp3
    const fileName = Date.now(); //TODO 12312321321
    cb(null, `${fileName}.${ext}`); //TODO 123123213232.pdf
  },
  destination: function (res, file, cb) {
    cb(null, `./public`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  const file = req.file.filename;
  console.log(file)
  res.send({ data: "OK", url: `http://localhost:3000/${file}` });
});

app.listen(port, () => {
  console.log("Listo por el puerto", port);
});
