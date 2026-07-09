import { useState, useEffect } from 'react';
import { Video, HeartHandshake } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD_H, BG_CARD_Y, BORDER_H, BORDER_Y, SHADOW_H, SHADOW_Y,
  BORDER_H_HOV, BORDER_Y_HOV, SHADOW_H_HOV, SHADOW_Y_HOV,
  IMG_W, IMG_H, IMG_RADIUS, IMG_BORDER_FRONT, IMG_SHADOW_FRONT,
} from './design';

function BulletItem({ icon, text, color }: { icon: string; text: string; color: string }) {
  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#94a3b8', fontSize: 16, lineHeight: 1.5 }}>
      <span style={{ color, flexShrink: 0, marginTop: 2 }}>{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
}

export function Slide5() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const card = (i: number, variant: 'h' | 'y') => {
    const isHov = hovered === i;
    const bg = variant === 'h' ? BG_CARD_H : BG_CARD_Y;
    const brd = isHov ? (variant === 'h' ? BORDER_H_HOV : BORDER_Y_HOV) : (variant === 'h' ? BORDER_H : BORDER_Y);
    const sh  = isHov ? (variant === 'h' ? SHADOW_H_HOV : SHADOW_Y_HOV) : (variant === 'h' ? SHADOW_H : SHADOW_Y);
    return { background: bg, border: brd, boxShadow: sh, borderRadius: 16, transform: isHov ? 'translateY(-4px)' : 'none', transition: 'all 0.22s ease', cursor: 'default' };
  };

  return (
    <div
      className="relative w-[1920px] h-[1080px] overflow-hidden"
      style={{ background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div
        className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={SLIDE_PAD}
      >
        <SectionTitle title="Expansão e Fidelização." />

        <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
          {/* LEFT — 2 stacked cards */}
          <div style={{ flexShrink: 0, width: 750, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Reels — blue */}
            <div
              onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}
              style={{ ...card(0, 'h'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Video size={20} /></IconBadge>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>A Importância dos Reels</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>
                Atualmente, os Reels representam apenas <strong style={{ color: 'white' }}>0,9%</strong> das views. Isso é um gargalo de crescimento.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
                <BulletItem icon="▹" color="#60a5fa" text='Instagram usa Reels para atingir <strong style="color:white">não-seguidores</strong>.' />
                <BulletItem icon="▹" color="#60a5fa" text='Forma mais barata de reverter a perda de seguidores.' />
                <BulletItem icon="▹" color="#60a5fa" text='Temas "blockbuster" precisam virar vídeos curtos.' />
              </ul>
            </div>

            {/* Stories — yellow */}
            <div
              onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}
              style={{ ...card(1, 'y'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <IconBadge color="#facc15" bg="rgba(234,179,8,0.2)"><HeartHandshake size={20} /></IconBadge>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>Retenção e Stories</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>
                A perda de (3.651) seguidores mostra falta de conexão. Stories (<strong style={{ color: 'white' }}>6,7%</strong>) devem focar na retenção.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
                <BulletItem icon="▹" color="#facc15" text='Stories servem para <strong style="color:white">fidelizar</strong> fãs, não atrair.' />
                <BulletItem icon="▹" color="#facc15" text='Focar em bastidores e enquetes diárias.' />
                <BulletItem icon="▹" color="#facc15" text='Sem retenção, o perfil é um <strong style="color:white">"balde furado"</strong>.' />
              </ul>
            </div>
          </div>

          {/* RIGHT — single image, centered */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56.jpeg"
              alt=""
              style={{
                width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'top',
                borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}