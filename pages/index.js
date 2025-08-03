import Link from 'next/link';

const guiList = [
  {
    id: 'kavo',
    name: 'Kavo UI',
    description: 'Kavo, sade ama güçlü bir script GUI sistemidir.',
    image: '/guis/kavo.png',
  },
  {
    id: 'luna',
    name: 'Luna UI',
    description: 'Luna, gelişmiş özellikleri olan modern bir arayüzdür.',
    image: '/guis/luna.png',
  },
  {
    id: 'starlight',
    name: 'Starlight UI',
    description: 'Starlight, animasyonlu ve kullanıcı dostu bir GUI\'dir.',
    image: '/guis/starlight.png',
  },
  {
    id: 'catalyst',
    name: 'Catalyst UI',
    description: 'Catalyst, şık animasyonlar ve ultra responsive yapısıyla öne çıkar.',
    image: '/guis/catalyst.png',
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '3rem', background: '#f0f2f5' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>📂 GUI Library Showcase</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {guiList.map(gui => (
          <div key={gui.id} style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <img
              src={gui.image}
              alt={gui.name}
              style={{ width: '100%', height: '280px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{gui.name}</h2>
                <p style={{ color: '#555', fontSize: '1rem', maxWidth: '600px' }}>{gui.description}</p>
              </div>
              <Link href={`/${gui.id}`}>
                <button style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  Visit ➜
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
