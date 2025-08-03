import { useRouter } from 'next/router';

const guiData = {
  kavo: {
    name: 'Kavo UI',
    description: 'Kavo, sade ama güçlü bir script GUI sistemidir. Geliştiriciler için basit ama etkili bir çözümdür.',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Kavo-hub/Kavo/main/Init.lua"))()`,
    image: '/guis/kavo.png',
    video: '/videos/kavo.mp4'
  },
  luna: {
    name: 'Luna UI',
    description: 'Luna, modern ve animasyonlu yapısı ile dikkat çeken gelişmiş bir GUI sistemidir.',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/LunaUI/Luna/main/Loader.lua"))()`,
    image: '/guis/luna.png',
    video: '/videos/luna.mp4'
  },
  starlight: {
    name: 'Starlight UI',
    description: 'Starlight, görsel detaylarıyla öne çıkan etkileyici bir kullanıcı arayüzüdür.',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/StarlightUI/Main/main.lua"))()`,
    image: '/guis/starlight.png',
    video: '/videos/starlight.mp4'
  },
  catalyst: {
    name: 'Catalyst UI',
    description: 'Catalyst, responsive tasarımı ve şık geçişleri ile script severlerin favorisi.',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/CatalystUI/Main/main.lua"))()`,
    image: '/guis/catalyst.png',
    video: '/videos/catalyst.mp4'
  }
};

export default function GuiPage() {
  const router = useRouter();
  const { gui } = router.query;

  // Hala yükleniyorsa bekle
  if (!gui) return <p>Yükleniyor...</p>;

  const selectedGui = guiData[gui.toLowerCase()];

  if (!selectedGui) {
    return <p style={{ color: 'red', fontWeight: 'bold' }}>Geçersiz GUI ID: <code>{gui}</code></p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{selectedGui.name}</h1>
      <p>{selectedGui.description}</p>
      <pre style={{ background: '#111', color: '#0f0', padding: '1rem', overflowX: 'auto' }}>
        {selectedGui.code}
      </pre>
      <img src={selectedGui.image} alt={selectedGui.name} style={{ maxWidth: '100%', marginTop: '1rem' }} />
      <video controls style={{ maxWidth: '100%', marginTop: '1rem' }}>
        <source src={selectedGui.video} type="video/mp4" />
        Videoyu görüntüleyemiyorsanız, tarayıcınız desteklemiyor olabilir.
      </video>
    </div>
  );
        }
