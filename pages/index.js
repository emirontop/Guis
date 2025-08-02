import { useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  // Video dosyasını yükle ve hemen listeye ekle (URL.createObjectURL ile)
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setVideos((v) => [...v, { url, name: file.name }]);
  };

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: 20, fontFamily: "sans-serif" }}>
      <h1>Basit Video Yükleme</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        style={{ marginBottom: 20, color: "white" }}
      />

      {videos.length === 0 && <p>Henüz video yüklenmedi.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {videos.map((video, i) => (
          <div key={i} style={{ background: "#222", padding: 12, borderRadius: 8 }}>
            <p style={{ margin: "0 0 8px 0" }}>{video.name}</p>
            <video controls src={video.url} style={{ width: "100%", maxWidth: 600, borderRadius: 8 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
