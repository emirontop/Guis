import React from "react";
import guis from "../guis";

export default function Home() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Kod panoya kopyalandı.");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #121212;
          color: white;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
        }
        .card {
          background-color: #1f1f1f;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 30px;
          border: 1px solid #333;
        }
        .card img {
          width: 100%;
          max-width: 400px;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .card h2 {
          font-size: 24px;
          margin: 10px 0;
        }
        .card p {
          font-size: 14px;
          color: #bbb;
          margin-bottom: 15px;
        }
        .code {
          background-color: #000;
          padding: 10px;
          border-radius: 5px;
          color: #00ff88;
          font-family: monospace;
          font-size: 13px;
          overflow-x: auto;
        }
        .buttons {
          margin-top: 15px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn {
          padding: 8px 14px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
        }
        .btn:hover {
          background-color: #1e40af;
        }
      `}</style>

      <div className="container">
        <h1 className="title">GUI Library Tanıtım Sayfası</h1>

        {guis.map((gui, index) => (
          <div className="card" key={index}>
            <img src={gui.image} alt={gui.name} />
            <h2>{gui.name}</h2>
            <p>{gui.description}</p>
            <pre className="code">{gui.code}</pre>

            <div className="buttons">
              <button className="btn" onClick={() => handleCopy(gui.code)}>Kodu Kopyala</button>
              <a className="btn" href={gui.repo} target="_blank" rel="noopener noreferrer">Repo'ya Git</a>
              <a className="btn" href={`roblox://placeId=12345678&script=${encodeURIComponent(gui.code)}`}>Scripti Kullan</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
