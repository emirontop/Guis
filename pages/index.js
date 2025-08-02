import React from "react";
import guis from "../guis";

export default function Home() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Kod kopyalandı!");
  };

  return (
    <>
      <style>{`
        body {
          background-color: #121212;
          color: white;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 30px;
          text-align: center;
        }
        .card {
          background-color: #1e1e1e;
          border: 1px solid #333;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .card h2 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .card p {
          color: #bbb;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .code {
          background-color: black;
          padding: 10px;
          border-radius: 5px;
          color: #00ff88;
          font-family: monospace;
          font-size: 13px;
          overflow-x: auto;
        }
        .btn {
          margin-top: 10px;
          padding: 8px 14px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #1e40af;
        }
      `}</style>

      <div className="container">
        <h1 className="title">GUI Library Tanıtım Sayfası</h1>
        {guis.map((gui, index) => (
          <div className="card" key={index}>
            <h2>{gui.name}</h2>
            <p>{gui.description}</p>
            <pre className="code">{gui.code}</pre>
            <button className="btn" onClick={() => handleCopy(gui.code)}>
              Kodu Kopyala
            </button>
          </div>
        ))}
      </div>
    </>
  );
                }
