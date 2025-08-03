import { useRouter } from 'next/router';

const guiData = {
  kavo: {
    name: 'Kavo UI',
    description: 'Kavo, sade ama güçlü bir script GUI sistemidir.',
    exampleCode: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Kavo-hub/Kavo/main/Init.lua"))()`,
    image: '/guis/kavo.png',
    video: 'guis/kavo.mp4'
  },
  luna: {
    name: 'Luna UI',
    description: 'Luna, animasyonlu yapısı ile dikkat çeken modern bir GUI\'dir.',
    exampleCode: `loadstring(game:HttpGet("https://raw.githubusercontent.com/LunaUI/Luna/main/Loader.lua"))()`,
    image: '/guis/luna.png',
    video: '/videos/luna.mp4'
  },
  starlight: {
    name: 'Starlight UI',
    description: 'Starlight, görsel detaylarıyla öne çıkar.',
    exampleCode: `loadstring(game:HttpGet("https://raw.githubusercontent.com/StarlightUI/Main/main.lua"))()`,
    image: '/guis/starlight.png',
    video: '/videos/starlight.mp4'
  },
  catalyst: {
    name: 'Catalyst UI',
    description: 'Catalyst, responsive ve şık bir GUI çözümüdür.',
    exampleCode: `loadstring(game:HttpGet("https://raw.githubusercontent.com/CatalystUI/Main/main.lua"))()`,
    image: '/guis/catalyst.png',
    video: '/videos/catalyst.mp4'
  }
};

export default function GuiPage() {
  const router = useRouter();
  const { gui } = router.query;
  const data = guiData[gui];

  if (!data) {
    return <div>Geçersiz GUI ID.</div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h3>Örnek Kod:</h3>
      <pre style={{
        background: '#111',
        color: '#0f0',
        padding: '1rem',
        borderRadius: '8px',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
        maxWidth: '100%',
        wordBreak: 'break-word',
        boxSizing: 'border-box'
      }}>
        {data.exampleCode}
      </pre>
      <h3>Tanıtım Videosu:</h3>
      <video src={data.video} controls width="600" />
    </div>
  );
        }
