import { useState, useEffect } from 'react';
import { Users, MapPin, Clock } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BORDER, BORDER_H, SHADOW, SHADOW_H,
  BORDER_HOV, BORDER_H_HOV, SHADOW_HOV, SHADOW_H_HOV,
  IMG_W, IMG_H, IMG_RADIUS, IMG_BORDER_FRONT, IMG_SHADOW_FRONT,
} from './design';

export function Slide3() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const cardStyle = (i: number, variant: 'default' | 'highlight' = 'default') => {
    const isH = hovered === i;
    const isHighlight = variant === 'highlight';
    return {
      background: isHighlight ? BG_CARD_H : BG_CARD,
      border: isH ? (isHighlight ? BORDER_H_HOV : BORDER_HOV) : (isHighlight ? BORDER_H : BORDER),
      boxShadow: isH ? (isHighlight ? SHADOW_H_HOV : SHADOW_HOV) : (isHighlight ? SHADOW_H : SHADOW),
      borderRadius: 16,
      transform: isH ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all 0.22s ease',
      cursor: 'default',
    };
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
        <SectionTitle title="Público e Atividade." />

        <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
          {/* LEFT — 3 cards (row of 2 + 1 full-width) */}
          <div style={{ flexShrink: 0, width: 750, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Row 1: Gênero + Localização */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: '0 0 auto' }}>
              {/* Gênero */}
              <div
                onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}
                style={{ ...cardStyle(0), padding: '26px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)"><Users size={20} /></IconBadge>
                  <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Gênero</span>
                </div>
                <p style={{ color: 'white', fontSize: 38, fontWeight: 900, lineHeight: 1.2, marginBottom: 6 }}>
                  58,9% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Homens</span>
                </p>
                <p style={{ color: 'white', fontSize: 38, fontWeight: 900, lineHeight: 1.2 }}>
                  41,1% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Mulheres</span>
                </p>
              </div>

              {/* Localização */}
              <div
                onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}
                style={{ ...cardStyle(1), padding: '26px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)"><MapPin size={20} /></IconBadge>
                  <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Localização</span>
                </div>
                <p style={{ color: 'white', fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginTop: 10 }}>
                  96,3% <span style={{ fontSize: 17, fontWeight: 500, color: '#64748b' }}>Brasil</span>
                </p>
              </div>
            </div>

            {/* Row 2: Horários de Pico (highlighted, fills remaining height) */}
            <div
              onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)}
              style={{ ...cardStyle(2, 'highlight'), flex: 1, padding: '26px 30px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Clock size={20} /></IconBadge>
                <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Horários de Pico</span>
              </div>
              <p style={{ color: 'white', fontSize: 20, lineHeight: 1.55, marginBottom: 20 }}>
                A audiência se mantém altamente ativa das <strong style={{ color: '#60a5fa' }}>09h às 21h</strong>.
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 12, padding: '16px 20px',
              }}>
                <span style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Picos de audiência online:</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['12:00', '15:00', '18:00'].map(h => (
                    <span key={h} style={{
                      color: 'white', fontSize: 20, fontWeight: 700,
                      background: 'rgba(29,78,216,0.35)', border: '1px solid rgba(37,99,235,0.5)',
                      borderRadius: 10, padding: '8px 18px',
                    }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — single image, centered */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.56 (1).jpeg"
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