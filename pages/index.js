const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const videoDir = path.join(__dirname, "videos");
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, videoDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

app.use(express.static(videoDir));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<title>Video Yükle ve İzle</title>
<style>
  body { background: #111; color: #eee; font-family: Arial, sans-serif; padding: 20px; }
  input, button { padding: 8px; margin-top: 8px; width: 100%; box-sizing: border-box; border-radius: 5px; border: none; }
  input[type="file"] { padding: 3px; }
  button { background: #f90; color: black; font-weight: bold; cursor: pointer; }
  .video-item { margin-top: 20px; border-radius: 8px; overflow: hidden; }
  video { width: 100%; border-radius: 8px; }
</style>
</head>
<body>
  <h1>🎥 Video Yükle</h1>
  <form id="uploadForm" enctype="multipart/form-data" method="POST" action="/upload">
    <input type="file" name="video" accept="video/*" required />
    <button type="submit">Yükle</button>
  </form>
  <h2>Kayıtlı Videolar</h2>
  <div id="videos"></div>

  <script>
    async function loadVideos() {
      const res = await fetch("/list");
      const videos = await res.json();
      const container = document.getElementById("videos");
      container.innerHTML = "";
      videos.forEach(name => {
        const div = document.createElement("div");
        div.className = "video-item";
        div.innerHTML = \`<video controls src="/\${name}"></video>\`;
        container.appendChild(div);
      });
    }

    document.getElementById("uploadForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const res = await fetch("/upload", { method: "POST", body: data });
      if(res.ok){
        alert("Video yüklendi!");
        form.reset();
        loadVideos();
      } else {
        alert("Yükleme başarısız.");
      }
    });

    loadVideos();
  </script>
</body>
</html>`);
});

app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).send("Video yüklenemedi.");
  res.status(200).send("OK");
});

app.get("/list", (req, res) => {
  fs.readdir(videoDir, (err, files) => {
    if (err) return res.status(500).json([]);
    // Sadece video dosyaları (mp4, webm, ogg)
    const vids = files.filter(f => /\.(mp4|webm|ogg)$/i.test(f));
    res.json(vids);
  });
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
