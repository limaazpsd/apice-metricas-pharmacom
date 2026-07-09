import { useState, useEffect } from 'react';
import { Users, MapPin, Clock } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BORDER, BORDER_H, SHADOW, SHADOW_H,
  BORDER_HOV, BORDER_H_HOV, SHADOW_HOV, SHADOW_H_HOV,
  IMG_W, IMG_H, MOBILE_IMG_W, MOBILE_IMG_H,
  IMG_RADIUS, IMG_BORDER_FRONT, IMG_SHADOW_FRONT,
} from './design';

export function Slide3({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const cardStyle = (i: number, variant: 'default' | 'highlight' = 'default') => {
    const isH = hovered === i;
    const isHl = variant === 'highlight';
    return {
      background: isHl ? BG_CARD_H : BG_CARD,
      border: isH ? (isHl ? BORDER_H_HOV : BORDER_HOV) : (isHl ? BORDER_H : BORDER),
      boxShadow: isH ? (isHl ? SHADOW_H_HOV : SHADOW_HOV) : (isHl ? SHADOW_H : SHADOW),
      borderRadius: 16, transform: isH ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all 0.22s ease', cursor: 'default',
    };
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
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56 (1).jpeg" alt="" style={{ width: MOBILE_IMG_W, height: MOBILE_IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #070D14 90%, #070D14 100%)', zIndex: 3 }} />
            </div>
            
            {/* Written Content Group - pushed to bottom, with footer padding */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, paddingBottom: 40 }}>
              <SectionTitle title="Público e Atividade." mobile={mobile} />
              {/* Cards - flex column with auto height */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                {/* Row: Gênero + Localização */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(0), padding: '30px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)" mobile={mobile}><Users size={18} /></IconBadge>
                      <span style={{ color: '#94a3b8', fontSize: 16, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Gênero</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 44, fontWeight: 900, lineHeight: 1.2, margin: 0, marginBottom: 4 }}>58,9% <span style={{ fontSize: 20, fontWeight: 500, color: '#64748b' }}>Homens</span></p>
                    <p style={{ color: 'white', fontSize: 44, fontWeight: 900, lineHeight: 1.2, margin: 0 }}>41,1% <span style={{ fontSize: 20, fontWeight: 500, color: '#64748b' }}>Mulheres</span></p>
                  </div>
                  <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(1), padding: '30px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)" mobile={mobile}><MapPin size={18} /></IconBadge>
                      <span style={{ color: '#94a3b8', fontSize: 16, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Localização</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 54, fontWeight: 900, lineHeight: 1.1, marginTop: 8, margin: 0 }}>96,3% <span style={{ fontSize: 20, fontWeight: 500, color: '#64748b' }}>Brasil</span></p>
                  </div>
                </div>
                {/* Horários (Centralized design) - no flex:1, just auto height */}
                <div onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(2, 'highlight'), padding: '30px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)" mobile={mobile}><Clock size={18} /></IconBadge>
                    <span style={{ color: '#94a3b8', fontSize: 16, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Picos de visualização da página</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    {['12:00', '15:00', '18:00'].map(h => <span key={h} style={{ color: 'white', fontSize: 26, fontWeight: 800, background: 'rgba(29,78,216,0.35)', border: '1px solid rgba(37,99,235,0.5)', borderRadius: 12, padding: '12px 24px' }}>{h}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </>
) : (
          // ── DESKTOP ──────────────────────────────────────────────────────────
          <>
            {/* Two containers: LEFT content (left-aligned, positioned left), RIGHT image (center-center) */}
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', paddingLeft: 80, paddingRight: 80, gap: 100 }}>
              {/* LEFT CONTAINER: written content - LEFT ALIGNED, positioned more to the left */}
              <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 28, flex: 1 }}>
                <SectionTitle title="Público e Atividade." />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: '0 0 auto' }}>
                    <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(0), padding: '26px 28px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                        <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)"><Users size={20} /></IconBadge>
                        <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Gênero</span>
                      </div>
                      <p style={{ color: 'white', fontSize: 38, fontWeight: 900, lineHeight: 1.2, marginBottom: 6 }}>58,9% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Homens</span></p>
                      <p style={{ color: 'white', fontSize: 38, fontWeight: 900, lineHeight: 1.2 }}>41,1% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Mulheres</span></p>
                    </div>
                    <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(1), padding: '26px 28px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                        <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)"><MapPin size={20} /></IconBadge>
                        <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Localização</span>
                      </div>
                      <p style={{ color: 'white', fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginTop: 10 }}>96,3% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Brasil</span></p>
                    </div>
                  </div>
                  <div onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)} style={{ ...cardStyle(2, 'highlight'), padding: '26px 30px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Clock size={20} /></IconBadge>
                      <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Horários de Pico</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 20, lineHeight: 1.55, marginBottom: 20 }}>A audiência se mantém altamente ativa das <strong style={{ color: '#60a5fa' }}>09h às 21h</strong>.</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 12, padding: '16px 20px' }}>
                      <span style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Picos de audiência online:</span>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {['12:00', '15:00', '18:00'].map(h => <span key={h} style={{ color: 'white', fontSize: 20, fontWeight: 700, background: 'rgba(29,78,216,0.35)', border: '1px solid rgba(37,99,235,0.5)', borderRadius: 10, padding: '8px 18px' }}>{h}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT CONTAINER: image - CENTER-CENTER ALIGNED */}
              <div style={{ width: 480, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56 (1).jpeg" alt="" style={{ width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'center', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}