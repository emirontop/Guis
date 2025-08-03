import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const guiData = {
  kavo: {
    name: 'Kavo UI',
    description: 'Kavo, sade ama güçlü bir script GUI sistemidir.',
    exampleCode: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Kavo-hub/Kavo/main/Init.lua"))()`,
    image: '/guis/kavo.png',
    video: '/videos/kavo.mp4'
  },
  // diğer GUI'ler...
};

export default function GuiPage() {
  const router = useRouter();
  const { gui } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (gui && guiData[gui]) {
      setData(guiData[gui]);
    }
  }, [gui]);

  if (!data) {
    return <div style={{ textAlign: 'center', marginTop: 50 }}>Yükleniyor...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h3>Örnek Kod:</h3>
      <pre style={{
       background: '#111',
       color: '#0f0',
       padding: '1rem',
       borderRadius: '8px',
       whiteSpace: 'pre-wrap', // Satır sonlarında taşmasın
       overflowX: 'auto',       // Yine de gerekirse yatay scroll eklesin
       maxWidth: '100%',        // Sayfa dışına taşmasın
       wordBreak: 'break-word', // Uzun satırları da bölsün
       boxSizing: 'border-box'
  }}>
  {data.exampleCode}
</pre>
        {data.exampleCode}
      </pre>
      <h3>Tanıtım Videosu:</h3>
      <video src={data.video} controls width="600" />
    </div>
  );
}
