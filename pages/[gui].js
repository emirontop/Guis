import { useRouter } from 'next/router';

const guiData = {
  kavo: {
    name: 'Kavo UI',
    image: '/guis/kavo.png',
    video: '/guis/kavo.mp4'
  },
  luna: {
    name: 'Luna UI',
    image: '/guis/luna.png',
    video: '/guis/luna.mp4'
  },
  starlight: {
    name: 'Starlight UI',
    image: '/guis/starlight.png',
    video: '/guis/starlight.mp4'
  }
};

export default function GuiPage() {
  const router = useRouter();
  const { gui } = router.query;

  const guiInfo = guiData[gui];

  if (!guiInfo) return <p>GUI not found.</p>;

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>{guiInfo.name}</h1>
      <img src={guiInfo.image} alt={guiInfo.name} style={{ maxWidth: 500, borderRadius: 10 }} />
      <h2>Showcase Video</h2>
      <video controls width={500} style={{ borderRadius: 10 }}>
        <source src={guiInfo.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
