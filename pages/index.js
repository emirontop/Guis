import { useState, useEffect } from "react";
import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

// API handler (upload ve video listeleme)
const apiHandler = nextConnect();

const uploadDir = path.join(process.cwd(), "public/videos");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

apiHandler.use(upload.single("video"));

apiHandler.post(async (req, res) => {
  res.status(200).json({ message: "Video yüklendi." });
});

apiHandler.get((req, res) => {
  const files = fs.readdirSync(uploadDir).filter(f => /\.(mp4|webm|ogg)$/i.test(f));
  res.status(200).json(files);
});

export default function Home({ videos }) {
  const [file, setFile] = useState(null);
  const [videoList, setVideoList] = useState(videos || []);
  const [loading, setLoading] = useState(false);

  async function fetchVideos() {
    const res = await fetch("/api/videos");
    const data = await res.json();
    setVideoList(data);
  }

  async function uploadVideo(e) {
    e.preventDefault();
    if (!file) return alert("Video seçin.");
    setLoading(true);

    const formData = new FormData();
    formData.append("video", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    if (res.ok) {
      alert("Video yüklendi!");
      setFile(null);
      fetchVideos();
    } else {
      alert("Yükleme başarısız.");
    }
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif", background: "#111", color: "#eee", padding: 20, borderRadius: 8 }}>
      <h1>🎥 Video Yükle</h1>
      <form onSubmit={uploadVideo}>
        <input type="file" accept="video/*" onChange={e => setFile(e.target.files[0])} required style={{ width: "100%", padding: 8, borderRadius: 5, marginBottom: 10, backgroundColor: "#222", color: "#eee", border: "none" }} />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 10, borderRadius: 5, backgroundColor: "#f90", fontWeight: "bold", cursor: "pointer", border: "none" }}>
          {loading ? "Yükleniyor..." : "Yükle"}
        </button>
      </form>

      <h2 style={{ marginTop: 30 }}>🎬 Kayıtlı Videolar</h2>
      {videoList.length === 0 && <p>Henüz video yok.</p>}
      {videoList.map(v => (
        <video key={v} controls style={{ width: "100%", marginTop: 10, borderRadius: 8 }}>
          <source src={`/videos/${v}`} />
          Tarayıcınız video formatını desteklemiyor.
        </video>
      ))}
    </main>
  );
}

// Next.js API routes - middleware
export async function middleware(req, res) {
  if (req.url.startsWith("/api/upload") || req.url.startsWith("/api/videos")) {
    return apiHandler(req, res);
  }
}

// Server side props ile video listesini getir (isteğe bağlı)
export async function getServerSideProps() {
  const uploadDir = path.join(process.cwd(), "public/videos");
  let videos = [];
  if (fs.existsSync(uploadDir)) {
    videos = fs.readdirSync(uploadDir).filter(f => /\.(mp4|webm|ogg)$/i.test(f));
  }
  return { props: { videos } };
}
