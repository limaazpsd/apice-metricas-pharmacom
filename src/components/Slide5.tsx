import { useState, useEffect } from 'react';
import { Video, HeartHandshake } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD_H, BG_CARD_Y, BORDER_H, BORDER_Y, SHADOW_H, SHADOW_Y,
  BORDER_H_HOV, BORDER_Y_HOV, SHADOW_H_HOV, SHADOW_Y_HOV,
  IMG_W, IMG_H, MOBILE_IMG_W, MOBILE_IMG_H,
  IMG_RADIUS, IMG_BORDER_FRONT, IMG_SHADOW_FRONT,
} from './design';

function BulletItem({ icon, text, color }: { icon: string; text: string; color: string }) {
  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#94a3b8', fontSize: 16, lineHeight: 1.5 }}>
      <span style={{ color, flexShrink: 0, marginTop: 2 }}>{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
}
function BulletItemSm({ icon, text, color, mobile }: { icon: string; text: string; color: string; mobile?: boolean }) {
  return (
    <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start', color: '#94a3b8', fontSize: mobile ? 18 : 13, lineHeight: 1.45 }}>
      <span style={{ color, flexShrink: 0 }}>{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
}

export function Slide5({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1600 : 1080;

  const card = (i: number, variant: 'h' | 'y') => {
    const isHov = hovered === i;
    const bg  = variant === 'h' ? BG_CARD_H : BG_CARD_Y;
    const brd = isHov ? (variant === 'h' ? BORDER_H_HOV : BORDER_Y_HOV) : (variant === 'h' ? BORDER_H : BORDER_Y);
    const sh  = isHov ? (variant === 'h' ? SHADOW_H_HOV : SHADOW_Y_HOV) : (variant === 'h' ? SHADOW_H : SHADOW_Y);
    return { background: bg, border: brd, boxShadow: sh, borderRadius: 16, transform: isHov ? 'translateY(-4px)' : 'none', transition: 'all 0.22s ease', cursor: 'default' };
  };

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />
      <div className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        {mobile ? (
          // ── MOBILE ───────────────────────────────────────────────────────────
          <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, flexShrink: 0 }}>
              <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56.jpeg" alt="" style={{ width: MOBILE_IMG_W, height: MOBILE_IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
            </div>
            <div style={{ marginTop: 32 }}><SectionTitle title="Expansão e Fidelização." mobile={mobile} /></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
              {/* Reels */}
              <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...card(0, 'h'), flex: 1, padding: '30px 24px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)" mobile={mobile}><Video size={18} /></IconBadge>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: 24, margin: 0 }}>A Importância dos Reels</h3>
                </div>
                <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.5, marginBottom: 14 }}>Reels representam apenas <strong style={{ color: 'white' }}>0,9%</strong> das views. Gargalo de crescimento.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <BulletItemSm mobile={mobile} icon="▹" color="#60a5fa" text='Reels atingem <strong style="color:white">não-seguidores</strong>.' />
                  <BulletItemSm mobile={mobile} icon="▹" color="#60a5fa" text='Forma mais barata de reverter a perda.' />
                  <BulletItemSm mobile={mobile} icon="▹" color="#60a5fa" text='Temas "blockbuster" precisam virar vídeos.' />
                </ul>
              </div>
              {/* Stories */}
              <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...card(1, 'y'), flex: 1, padding: '30px 24px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <IconBadge color="#facc15" bg="rgba(234,179,8,0.2)" mobile={mobile}><HeartHandshake size={18} /></IconBadge>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: 24, margin: 0 }}>Retenção e Stories</h3>
                </div>
                <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.5, marginBottom: 14 }}>Perda de (3.651) seguidores. Stories (<strong style={{ color: 'white' }}>6,7%</strong>) devem focar em retenção.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <BulletItemSm mobile={mobile} icon="▹" color="#facc15" text='Stories para <strong style="color:white">fidelizar</strong> fãs.' />
                  <BulletItemSm mobile={mobile} icon="▹" color="#facc15" text='Bastidores e enquetes diárias.' />
                  <BulletItemSm mobile={mobile} icon="▹" color="#facc15" text='Sem retenção é um <strong style="color:white">"balde furado"</strong>.' />
                </ul>
              </div>
            </div>
          </>
        ) : (
          // ── DESKTOP ──────────────────────────────────────────────────────────
          <>
            <SectionTitle title="Expansão e Fidelização." />
            <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
              <div style={{ flexShrink: 0, width: 750, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...card(0, 'h'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Video size={20} /></IconBadge>
                    <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>A Importância dos Reels</h3>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>Atualmente, os Reels representam apenas <strong style={{ color: 'white' }}>0,9%</strong> das views. Isso é um gargalo de crescimento.</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
                    <BulletItem icon="▹" color="#60a5fa" text='Instagram usa Reels para atingir <strong style="color:white">não-seguidores</strong>.' />
                    <BulletItem icon="▹" color="#60a5fa" text='Forma mais barata de reverter a perda de seguidores.' />
                    <BulletItem icon="▹" color="#60a5fa" text='Temas "blockbuster" precisam virar vídeos curtos.' />
                  </ul>
                </div>
                <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...card(1, 'y'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <IconBadge color="#facc15" bg="rgba(234,179,8,0.2)"><HeartHandshake size={20} /></IconBadge>
                    <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>Retenção e Stories</h3>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>A perda de (3.651) seguidores mostra falta de conexão. Stories (<strong style={{ color: 'white' }}>6,7%</strong>) devem focar na retenção.</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
                    <BulletItem icon="▹" color="#facc15" text='Stories servem para <strong style="color:white">fidelizar</strong> fãs, não atrair.' />
                    <BulletItem icon="▹" color="#facc15" text='Focar em bastidores e enquetes diárias.' />
                    <BulletItem icon="▹" color="#facc15" text='Sem retenção, o perfil é um <strong style="color:white">"balde furado"</strong>.' />
                  </ul>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56.jpeg" alt="" style={{ width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}