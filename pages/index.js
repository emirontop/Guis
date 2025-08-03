<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>GUI Script Hub</title>
  <style>
    body {
      background: #111;
      color: #eee;
      font-family: sans-serif;
      padding: 20px;
    }
    h1 {
      margin-bottom: 20px;
    }
    .gui-list { display: flex; flex-direction: column; gap: 12px; }
    .gui-card {
      background: #1c1c1c;
      padding: 15px;
      border-left: 4px solid #00c3ff;
      border-radius: 5px;
    }
    .gui-card h2 { margin: 0 0 8px 0; font-size: 18px; }
    .gui-card p { margin: 0 0 10px 0; font-size: 14px; color: #ccc; }
    .gui-card button {
      background: #00c3ff;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Emocii GUI Hub</h1>
  <div class="gui-list" id="guiList"></div>

  <script>
    const guis = [
      {
        name: "Rayfield UI",
        desc: "Modern ve şık arayüz sistemi.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/user/rayfield.lua"))()`
      },
      {
        name: "Kavo UI",
        desc: "Minimal tasarım ve geniş kullanım.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/user/kavo.lua"))()`
      }
    ];

    const guiList = document.getElementById("guiList");

    guis.forEach(gui => {
      const div = document.createElement("div");
      div.className = "gui-card";
      div.innerHTML = `
        <h2>${gui.name}</h2>
        <p>${gui.desc}</p>
        <button onclick="copyCode(\`${gui.code}\`)">Kodu Kopyala</button>
      `;
      guiList.appendChild(div);
    });

    function copyCode(code) {
      navigator.clipboard.writeText(code);
      alert("Kod kopyalandı!");
    }
  </script>
</body>
</html>
