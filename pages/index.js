import React from "react";
import guis from "../guis";

export default function Home() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Kod kopyalandı!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">GUI Library Tanıtım Sayfası</h1>
      <div className="grid gap-4">
        {guis.map((gui, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <h2 className="text-xl font-semibold">{gui.name}</h2>
            <p className="text-gray-400 mb-2">{gui.description}</p>
            <pre className="bg-black p-2 rounded text-green-400 text-sm overflow-x-auto">
              {gui.code}
            </pre>
            <button
              onClick={() => handleCopy(gui.code)}
              className="mt-2 px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
            >
              Kodu Kopyala
            </button>
          </div>
        ))}
      </div>
    </div>
  );
              }
