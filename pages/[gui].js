import { useRouter } from 'next/router';

const guiData = { kavo: { name: 'Kavo UI', description: 'Kavo, sade ama güçlü bir script GUI sistemidir. Geliştiriciler için basit ama etkili bir çözümdür.', exampleCode: `-- Kavo UI Example local Window = KavoUI.Config({ Title = "My GUI", Size = UDim2.new(0, 400, 0, 300), Theme = "Dark" })

local Section = Window:Section({ Name = "Demo Section" }) Section:HighlightButton({ Name = "Click Me", Callback = function() print("Button clicked!") end }) Window:Init(), image: '/guis/kavo.png', video: '/videos/kavo.mp4' }, luna: { name: 'Luna UI', description: 'Luna, modern ve animasyonlu yapısı ile dikkat çeken gelişmiş bir GUI sistemidir.', exampleCode: -- Luna UI Example local UI = LunaUI.New({ Title = "Luna Demo", Size = UDim2.new(0, 500, 0, 350) })

UI:Label("Welcome to Luna UI") UI:Button({ Text = "Press", OnClick = function() game.Players.LocalPlayer:Kick("You pressed the button!") end }) UI:Show(), image: '/guis/luna.png', video: '/videos/luna.mp4' }, starlight: { name: 'Starlight UI', description: 'Starlight, görsel detaylarıyla öne çıkan etkileyici bir kullanıcı arayüzüdür.', exampleCode: -- Starlight UI Example local Main = Starlight:CreateWindow("Starlight Demo") Main:AddTab("MainTab") Main.MainTab:AddToggle({ Text = "Enable", Default = true, Callback = function(state) print("Enabled:", state) end }) Main:Show(), image: '/guis/starlight.png', video: '/videos/starlight.mp4' },   catalyst: { name: 'Catalyst UI', description: 'Catalyst, responsive tasarımı ve şık geçişleri ile script severlerin favorisi.', exampleCode: -- Catalyst UI Example local App = Catalyst.Create({ Title = "Catalyst App", Theme = "Ocean" })

App.Section("Functions"):Button("Execute", function() print("Function executed!") end)

App:Run()`, image: '/guis/catalyst.png', video: '/videos/catalyst.mp4' } };

export default function GuiPage() { const router = useRouter(); const { id } = router.query;

if (!id) return <p>Yükleniyor...</p>;

const gui = guiData[id.toLowerCase()]; if (!gui) return <p style={{ color: 'red' }}>Geçersiz GUI ID: <code>{id}</code></p>;

return ( <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}> <img src={gui.image} alt={gui.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} /> <h1 style={{ marginTop: '1.5rem', fontSize: '2.2rem' }}>{gui.name}</h1> <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>{gui.description}</p>

<h3>🔧 Örnek Kod:</h3>
  <pre style={{ background: '#282c34', color: '#61dafb', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontFamily: 'monospace' }}>
    {gui.exampleCode}
  </pre>

  {gui.video && (
    <>
      <h3 style={{ marginTop: '2rem' }}>📺 Showcase Video:</h3>
      <video controls style={{ width: '100%', borderRadius: '12px' }}>
        <source src={gui.video} type="video/mp4" />
        Videoyu görüntüleyemiyorsanız, tarayıcınız desteklemiyor olabilir.
      </video>
    </>
  )}
</div>

); }

