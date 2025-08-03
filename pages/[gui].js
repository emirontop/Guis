import { useRouter } from 'next/router';

const guiData = { 
  kavo: { name: 'Kavo UI', description: 'Kavo, sade ama güçlü bir script GUI sistemidir. Geliştiriciler için basit ama etkili bir çözümdür.', code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Kavo-hub/Kavo/main/Init.lua"))()', image: '/guis/kavo.png', video: '/videos/kavo.mp4' },
  luna: { name: 'Luna UI', description: 'Luna, modern ve animasyonlu yapısı ile dikkat çeken gelişmiş bir GUI sistemidir.', code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/LunaUI/Luna/main/Loader.lua"))()', image: '/guis/luna.png', video: '/videos/luna.mp4' }, 
  starlight: { name: 'Starlight UI', description: 'Starlight, görsel detaylarıyla öne çıkan etkileyici bir kullanıcı arayüzüdür.', code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/StarlightUI/Main/main.lua"))()', image: '/guis/starlight.png', video: '/videos/starlight.mp4' },
  catalyst: { name: 'Catalyst UI', description: 'Catalyst, responsive tasarımı ve şık geçişleri ile script severlerin favorisi.', code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/CatalystUI/Main/main.lua"))()', image: '/guis/catalyst.png', video: '/videos/catalyst.mp4' }, };

export default function GuiPage() { const router = useRouter(); const { id } = router.query;

const gui = guiData[id];

if (!gui) return <div style={{ padding: '2rem' }}>❌ Geçersiz GUI ID</div>;

return ( <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto' }}> <img src={gui.image} alt={gui.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} /> <h1 style={{ marginTop: '1.5rem', fontSize: '2.2rem' }}>{gui.name}</h1> <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>{gui.description}</p>

<h3>🔧 Script:</h3>
  <textarea
    readOnly
    value={gui.code}
    style={{
      width: '100%',
      minHeight: '100px',
      fontSize: '1rem',
      fontFamily: 'monospace',
      padding: '1rem',
      background: '#f5f5f5',
      border: '1px solid #ccc',
      borderRadius: '8px',
      resize: 'none'
    }}
  />

  {gui.video && (
    <>
      <h3 style={{ marginTop: '2rem' }}>📺 Showcase Video:</h3>
      <video controls style={{ width: '100%', borderRadius: '12px' }}>
        <source src={gui.video} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </>
  )}
</div>

); }

