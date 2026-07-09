import { useState, useEffect } from 'react';
import { CheckCircle, Rocket, Target } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD_H, BG_CARD_G, BG_CARD_R, BORDER_H, BORDER_G, BORDER_R, SHADOW_H, SHADOW_G, SHADOW_R,
  BORDER_H_HOV, BORDER_G_HOV, BORDER_R_HOV, SHADOW_H_HOV, SHADOW_G_HOV, SHADOW_R_HOV,
} from './design';

export function Slide6() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const card = (i: number, variant: 'h' | 'g' | 'r') => {
    const isHov = hovered === i;
    const bgs   = { h: BG_CARD_H, g: BG_CARD_G, r: BG_CARD_R };
    const bords  = { h: BORDER_H, g: BORDER_G, r: BORDER_R };
    const bordsH = { h: BORDER_H_HOV, g: BORDER_G_HOV, r: BORDER_R_HOV };
    const shads  = { h: SHADOW_H, g: SHADOW_G, r: SHADOW_R };
    const shadsH = { h: SHADOW_H_HOV, g: SHADOW_G_HOV, r: SHADOW_R_HOV };
    return {
      background: bgs[variant], borderRadius: 16, cursor: 'default',
      border: isHov ? bordsH[variant] : bords[variant],
      boxShadow: isHov ? shadsH[variant] : shads[variant],
      transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all 0.22s ease',
    };
  };

  return (
    <div
      className="relative w-[1920px] h-[1080px] overflow-hidden"
      style={{ background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div
        className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={SLIDE_PAD}
      >
        <SectionTitle title="Próximos Passos." />

        <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
          {/* LEFT — acertos + plano */}
          <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Acertos — green */}
            <div
              onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}
              style={{ ...card(0, 'g'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <IconBadge color="#4ade80" bg="rgba(34,197,94,0.2)"><CheckCircle size={20} /></IconBadge>
                <h3 style={{ color: '#4ade80', fontWeight: 700, fontSize: 20, margin: 0 }}>O que funcionou (Acertos)</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, listStyle: 'none', padding: 0, margin: 0 }}>
                {[['✅', 'Temas Polêmicos:', 'Engajamento brutal no nicho.'], ['✅', 'Gatilhos:', 'Títulos investigativos que retêm a leitura.'], ['✅', 'Ativação da Base:', 'Salto histórico no alcance interno.']].map(([icon, bold, rest], i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#94a3b8', fontSize: 17, lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0 }}>{icon}</span>
                    <span><strong style={{ color: 'white' }}>{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plano — blue */}
            <div
              onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}
              style={{ ...card(1, 'h'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Rocket size={20} /></IconBadge>
                <h3 style={{ color: '#38bdf8', fontWeight: 700, fontSize: 20, margin: 0 }}>Plano de Ação</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, listStyle: 'none', padding: 0, margin: 0 }}>
                {[['🚀', 'Volume Triplicado em Reels:', 'Foco em vídeos para tracionar público frio.'], ['🚀', 'Stories Intensivos:', 'Enquetes para estancar a perda de seguidores.'], ['🚀', 'CTAs Estratégicos:', 'Forçar compartilhamento no feed para viralizar.']].map(([icon, bold, rest], i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#94a3b8', fontSize: 17, lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0 }}>{icon}</span>
                    <span><strong style={{ color: 'white' }}>{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — full-height red challenge card */}
          <div
            onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)}
            style={{
              ...card(2, 'r'),
              flexShrink: 0, width: 520,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', padding: '40px 44px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 96, height: 96, borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', marginBottom: 24 }}>
              <Target style={{ color: '#f87171', width: 50, height: 50 }} />
            </div>
            <h3 style={{ color: '#f87171', fontWeight: 900, fontSize: 36, marginBottom: 20 }}>O Grande Desafio</h3>
            <p style={{ color: 'white', fontSize: 21, lineHeight: 1.6, marginBottom: 16 }}>
              O perfil reconquistou a base atual, mas está <strong style={{ color: '#f87171' }}>estagnado fora da bolha</strong>.
            </p>
            <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.6 }}>
              A virada de chave é <strong style={{ color: 'white' }}>atrair (Reels)</strong> e <strong style={{ color: 'white' }}>reter (Stories)</strong> simultaneamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}