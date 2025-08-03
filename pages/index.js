import Link from 'next/link';

const guiList = [
  {
    id: 'kavo',
    name: 'Kavo UI',
    image: '/guis/kavo.png'
  },
  {
    id: 'luna',
    name: 'Luna UI',
    image: '/guis/luna.png'
  },
  {
    id: 'starlight',
    name: 'Starlight UI',
    image: '/guis/starlight.png'
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>📚 GUI Library Showcase</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {guiList.map(gui => (
          <div key={gui.id} style={{
            border: '1px solid #ccc',
            borderRadius: 10,
            width: 200,
            padding: 10
          }}>
            <img src={gui.image} alt={gui.name} style={{ width: '100%', borderRadius: 8 }} />
            <h3>{gui.name}</h3>
            <Link href={`/${gui.id}`}>
              <button style={{
                padding: '8px 12px',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer'
              }}>Visit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
                     }
