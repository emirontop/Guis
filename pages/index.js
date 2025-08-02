import React, { useState } from "react";

const guis = [
  {
    name: "Kavo UI",
    description: "Klasik ve stabil GUI kütüphanesi.",
    video: "/kavo.mp4", // public/videos/kavo.mp4
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Kavo-UI/Kavo-UI-Library/main/source.lua"))()`,
    repo: "https://github.com/Kavo-UI/Kavo-UI-Library",
    showcase: "FE uyumlu basit script GUI'si."
  },
  {
    name: "Starlight",
    description: "Tema destekli gelişmiş GUI framework.",
    video: "/videos/starlight.mp4",
    code: `loadstring(game:HttpGet("https://nebula-softworks.github.io/starlight.js"))()`,
    repo: "https://github.com/NebulaSoftworks/Starlight",
    showcase: "Modern görünümlü, responsive GUI sistemi."
  }
];

export default function Home() {
  const [selectedGUI, setSelectedGUI] = useState(null);

  const handleBack = () => setSelectedGUI(null);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif", background: "#111", color: "white", minHeight: "100vh" }}>
      {!selectedGUI ? (
        <>
          <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>GUI Library Tanıtımları</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {guis.map((gui, index) => (
              <div
                key={index}
                onClick={() => setSelectedGUI(gui)}
                style={{
                  cursor: "pointer",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: 8,
                  padding: 12,
                  width: 250
                }}
              >
                <video src={gui.video} width="100%" height="140" style={{ borderRadius: 6 }} muted autoPlay loop />
                <h2 style={{ fontSize: 20, margin: "8px 0" }}>{gui.name}</h2>
                <p style={{ fontSize: 14, color: "#ccc" }}>{gui.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={handleBack} style={{ background: "#333", color: "white", padding: "6px 12px", borderRadius: 4, marginBottom: 16 }}>
            ◀ Geri Dön
          </button>
          <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>{selectedGUI.name}</h2>
          <video src={selectedGUI.video} controls width="100%" style={{ borderRadius: 6, marginBottom: 16 }} />
          <p><strong>Açıklama:</strong> {selectedGUI.description}</p>
          <p><strong>Showcase:</strong> {selectedGUI.showcase}</p>
          <p><strong>Script:</strong></p>
          <pre
            style={{
              background: "#000",
              padding: 12,
              borderRadius: 6,
              color: "#0f0",
              fontSize: 13,
              overflowX: "auto"
            }}
          >
            {selectedGUI.code}
          </pre>
          <p>
            <strong>Repo:</strong>{" "}
            <a href={selectedGUI.repo} target="_blank" rel="noopener noreferrer" style={{ color: "#4fa0ff" }}>
              {selectedGUI.repo}
            </a>
          </p>
        </>
      )}
    </div>
  );
}
