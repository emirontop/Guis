import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public/videos");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const handler = nextConnect();

handler.use(upload.single("video"));

handler.post((req, res) => {
  res.status(200).json({ message: "Video yüklendi." });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
