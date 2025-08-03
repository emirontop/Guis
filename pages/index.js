export default function Home() {
  const guis = [
    {
      name: "Rayfield UI",
      desc: "Şık ve pikselli Rayfield GUI arayüzü",
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/user/rayfield.lua"))()`
    },
    {
      name: "Kavo UI",
      desc: "Klasik sade GUI kütüphanesi",
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/user/kavo.lua"))()`
    }
  ];

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Kod kopyalandı!");
  };

  return (
    <div style={{ background: "#111", color: "#eee", minHeight: "100vh", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Emocii GUI Hub</h1>
      {guis.map((gui, index) => (
        <div key={index} style={{
          background: "#1c1c1c", padding: "1rem", marginBottom: "1rem",
          borderLeft: "4px solid #00c3ff", borderRadius: "6px"
        }}>
          <h2 style={{ margin: "0 0 0.5rem 0" }}>{gui.name}</h2>
          <p style={{ margin: "0 0 0.5rem 0", color: "#aaa" }}>{gui.desc}</p>
          <button
            onClick={() => copy(gui.code)}
            style={{ background: "#00c3ff", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px" }}
          >
            Kodu Kopyala
          </button>
        </div>
      ))}
    </div>
  );
                                }
