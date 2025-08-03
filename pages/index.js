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
    <div style={{ fontFamily: 'sans-serif', padding: '3rem', background: '#f8f9fa' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>🚀 GUI Library Showcase</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {guiList.map(gui => (
          <div key={gui.id} style={{
            display: 'flex',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <img
              src={gui.image}
              alt={gui.name}
              style={{ width: '280px', height: 'auto', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{gui.name}</h2>
                <p style={{ fontSize: '1rem', color: '#555' }}>{gui.description}</p>
              </div>
              <div>
                <Link href={`/${gui.id}`}>
                  <button style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>
                    Visit ➜
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
                     }
