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
  const H = mobile ? 1800 : 1080;

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
      <div className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? { ...SLIDE_PAD_MOBILE, justifyContent: 'flex-end' } : SLIDE_PAD}>
        {mobile ? (
          // ── MOBILE ───────────────────────────────────────────────────────────
          <>
            {/* Absolute Top Image with padding from header, extended fade */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 950, zIndex: 0, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56.jpeg" alt="" style={{ width: MOBILE_IMG_W, height: MOBILE_IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #070D14 90%, #070D14 100%)', zIndex: 3 }} />
            </div>
            
            {/* Content Group - pushed to bottom, with footer padding */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, paddingBottom: 40 }}>
              <SectionTitle title="Expansão e Fidelização." mobile={mobile} />
              {/* Content column - no flex:1 forcing cards to fill space */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                {/* Reels - auto height, no flex:1 */}
                <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...card(0, 'h'), padding: '30px 24px' }}>
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
                {/* Stories - auto height, no flex:1 */}
                <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...card(1, 'y'), padding: '30px 24px' }}>
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
            </div>
          </>
        ) : (
          // ── DESKTOP ──────────────────────────────────────────────────────────
          <>
            {/* Two containers centered in slide: LEFT content (left-aligned), RIGHT image (center-center) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingLeft: 120, paddingRight: 120, gap: 60 }}>
              {/* LEFT CONTAINER: written content - left aligned */}
              <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 18, flex: 1, textAlign: 'left' }}>
                <SectionTitle title="Expansão e Fidelização." />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {/* Reels - proper size */}
                  <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...card(0, 'h'), padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Video size={20} /></IconBadge>
                      <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>A Importância dos Reels</h3>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.55, marginBottom: 14 }}>Atualmente, os Reels representam apenas <strong style={{ color: 'white' }}>0,9%</strong> das views. Isso é um gargalo de crescimento.</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 9, listStyle: 'none', padding: 0, margin: 0 }}>
                      <BulletItem icon="▹" color="#60a5fa" text='Instagram usa Reels para atingir <strong style="color:white">não-seguidores</strong>.' />
                      <BulletItem icon="▹" color="#60a5fa" text='Forma mais barata de reverter a perda de seguidores.' />
                      <BulletItem icon="▹" color="#60a5fa" text='Temas "blockbuster" precisam virar vídeos curtos.' />
                    </ul>
                  </div>
                  {/* Stories - proper size */}
                  <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...card(1, 'y'), padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <IconBadge color="#facc15" bg="rgba(234,179,8,0.2)"><HeartHandshake size={20} /></IconBadge>
                      <h3 style={{ color: 'white', fontWeight: 700, fontSize: 22, margin: 0 }}>Retenção e Stories</h3>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.55, marginBottom: 14 }}>A perda de (3.651) seguidores mostra falta de conexão. Stories (<strong style={{ color: 'white' }}>6,7%</strong>) devem focar na retenção.</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 9, listStyle: 'none', padding: 0, margin: 0 }}>
                      <BulletItem icon="▹" color="#facc15" text='Stories servem para <strong style="color:white">fidelizar</strong> fãs, não atrair.' />
                      <BulletItem icon="▹" color="#facc15" text='Focar em bastidores e enquetes diárias.' />
                      <BulletItem icon="▹" color="#facc15" text='Sem retenção, o perfil é um <strong style="color:white">"balde furado"</strong>.' />
                    </ul>
                  </div>
                </div>
              </div>
              {/* RIGHT CONTAINER: image - center-center aligned */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 440, flexShrink: 0, marginLeft: 50 }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56.jpeg" alt="" style={{ width: Math.round(IMG_W * 0.88), height: Math.round(IMG_H * 0.88), objectFit: 'cover', objectPosition: 'center', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}