import Link from 'next/link';

const guiList = [
  {
    id: 'kavo',
    name: 'Kavo UI',
    description: 'Kavo, sade ama güçlü bir script GUI sistemidir.',
    script: `loadstring(game:HttpGet("https://example.com/kavo.lua"))()`,
    image: '/guis/kavo.png',
    video: '/guis/kavo.mp4'
  },
  {
    id: 'luna',
    name: 'Luna UI',
    description: 'Luna, gelişmiş özellikleri olan modern bir arayüzdür.',
    script: `loadstring(game:HttpGet("https://example.com/luna.lua"))()`,
    image: '/guis/luna.png',
    video: '/guis/luna.mp4'
  },
  {
    id: 'starlight',
    name: 'Starlight UI',
    description: 'Starlight, animasyonlu ve kullanıcı dostu bir GUI\'dir.',
    script: `loadstring(game:HttpGet("https://example.com/starlight.lua"))()`,
    image: '/guis/starlight.png',
    video: '/guis/starlight.mp4'
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐 GUI Library Showcase</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {guiList.map(gui => (
          <div key={gui.id} style={{
            border: '1px solid #ddd',
            borderRadius: '16px',
            width: 350,
            padding: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}>
            <img src={gui.image} alt={gui.name} style={{ width: '100%', borderRadius: '12px' }} />
            <h2>{gui.name}</h2>
            <p>{gui.description}</p>

            <h4>📜 Script:</h4>
            <code style={{
              display: 'block',
              background: '#f3f3f3',
              padding: '0.5rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              wordBreak: 'break-word'
            }}>
              {gui.script}
            </code>

            <h4>🎬 Video:</h4>
            <video controls width="100%" style={{ borderRadius: 10 }}>
              <source src={gui.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div style={{ marginTop: '1rem' }}>
              <Link href={`/${gui.id}`}>
                <button style={{
                  padding: '8px 16px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>Detaylı Sayfa</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
