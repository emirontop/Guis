import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const videosDir = path.join(process.cwd(), "public/videos");
  if (!fs.existsSync(videosDir)) return res.status(200).json([]);

  const files = fs.readdirSync(videosDir).filter(f => /\.(mp4|webm|ogg)$/i.test(f));
  res.status(200).json(files);
}
