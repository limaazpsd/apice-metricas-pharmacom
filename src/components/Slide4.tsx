import { useState, useEffect } from 'react';
import { Trophy, LayoutGrid, AlertTriangle } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BG_CARD_R, BORDER, BORDER_H, BORDER_R, SHADOW, SHADOW_H, SHADOW_R,
  BORDER_HOV, BORDER_H_HOV, BORDER_R_HOV, SHADOW_HOV, SHADOW_H_HOV, SHADOW_R_HOV,
  IMG_W, IMG_H, MOBILE_IMG_W, MOBILE_IMG_H,
  IMG_RADIUS, IMG_BORDER_FRONT, IMG_BORDER_BACK, IMG_SHADOW_FRONT, IMG_SHADOW_BACK,
} from './design';

const top3 = [
  { rank: 1, title: '90 dias de suco leve...', views: '7.020', color: '#60a5fa' },
  { rank: 2, title: 'CR7: 41 Anos, Corpo...', views: '2.822', color: '#fff' },
  { rank: 3, title: 'Estão falando por causa?', views: '2.321', color: '#fff' },
];

export function Slide4({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1440 : 1080;

  const cardBase = (i: number, variant: 'default' | 'highlight' | 'red' = 'default') => {
    const isH = hovered === i;
    const bg = variant === 'red' ? BG_CARD_R : variant === 'highlight' ? BG_CARD_H : BG_CARD;
    const brd = isH ? (variant === 'red' ? BORDER_R_HOV : variant === 'highlight' ? BORDER_H_HOV : BORDER_HOV) : (variant === 'red' ? BORDER_R : variant === 'highlight' ? BORDER_H : BORDER);
    const sh  = isH ? (variant === 'red' ? SHADOW_R_HOV : variant === 'highlight' ? SHADOW_H_HOV : SHADOW_HOV) : (variant === 'red' ? SHADOW_R : variant === 'highlight' ? SHADOW_H : SHADOW);
    return { background: bg, border: brd, boxShadow: sh, borderRadius: 16, transform: isH ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.22s ease', cursor: 'default' };
  };

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />
      <div className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        {mobile ? (
          // ── MOBILE ───────────────────────────────────────────────────────────
          <>
            {/* Stacked images — centered */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, flexShrink: 0 }}>
              <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.57 (2).jpeg" alt="" style={{ width: Math.round(MOBILE_IMG_W * 0.82), height: Math.round(MOBILE_IMG_H * 0.82), objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_BACK, boxShadow: IMG_SHADOW_BACK, opacity: 0.5, marginRight: -50, transform: 'rotate(-5deg)', transformOrigin: 'center bottom', zIndex: 1, flexShrink: 0 }} />
              <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.58 (1).jpeg" alt="" style={{ width: MOBILE_IMG_W, height: MOBILE_IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT, position: 'relative', zIndex: 2, flexShrink: 0 }} />
            </div>
            <div style={{ marginTop: 32 }}><SectionTitle title="Desempenho de Conteúdo." mobile={mobile} /></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
              {/* Top 3 */}
              <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(0, 'highlight'), flexShrink: 0, padding: '30px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)" mobile={mobile}><Trophy size={18} /></IconBadge>
                  <span style={{ color: '#94a3b8', fontSize: 16, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Top 3 Posts (Views)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {top3.map(p => (
                    <div key={p.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 10, padding: '14px 18px' }}>
                      <span style={{ color: 'white', fontWeight: 500, fontSize: 20 }}>{p.rank}. {p.title}</span>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 34 }}>{p.views}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* 2 cards */}
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(1), padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)" mobile={mobile}><LayoutGrid size={18} /></IconBadge>
                    <span style={{ color: '#94a3b8', fontSize: 16, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Foco</span>
                  </div>
                  <p style={{ color: 'white', fontSize: 20, lineHeight: 1.5 }}>Feed domina com <strong style={{ color: '#60a5fa', fontSize: 34 }}>92,4%</strong> das visualizações.</p>
                </div>
                <div onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(2, 'red'), padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <IconBadge color="#f87171" bg="rgba(239,68,68,0.22)" mobile={mobile}><AlertTriangle size={18} /></IconBadge>
                    <span style={{ color: '#f87171', fontSize: 16, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Atenção</span>
                  </div>
                  <p style={{ color: 'white', fontSize: 20, lineHeight: 1.5 }}><strong style={{ color: '#f87171', fontSize: 34 }}>98,5%</strong> das views são de seguidores. Alcance externo: 1,5%.</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // ── DESKTOP ──────────────────────────────────────────────────────────
          <>
            <SectionTitle title="Desempenho de Conteúdo." />
            <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
              <div style={{ flexShrink: 0, width: 780, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(0, 'highlight'), flex: '0 0 auto', padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <IconBadge color="#38bdf8" bg="rgba(37,99,235,0.25)"><Trophy size={20} /></IconBadge>
                    <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Top 3 Posts (Views)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {top3.map(p => (
                      <div key={p.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 10, padding: '12px 16px' }}>
                        <span style={{ color: 'white', fontWeight: 500, fontSize: 17 }}>{p.rank}. {p.title}</span>
                        <span style={{ color: p.color, fontWeight: 900, fontSize: 30 }}>{p.views}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(1), padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.18)"><LayoutGrid size={20} /></IconBadge>
                      <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Foco de Entrega</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 17, lineHeight: 1.6 }}>Posts no Feed dominam com <strong style={{ color: '#60a5fa', fontSize: 26 }}>92,4%</strong> das visualizações.</p>
                  </div>
                  <div onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)} style={{ ...cardBase(2, 'red'), padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <IconBadge color="#f87171" bg="rgba(239,68,68,0.22)"><AlertTriangle size={20} /></IconBadge>
                      <span style={{ color: '#f87171', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Atenção Crítica</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 17, lineHeight: 1.6 }}><strong style={{ color: '#f87171', fontSize: 26 }}>98,5%</strong> das views vêm de quem <strong>já segue</strong>. Alcance externo é ínfimo (1,5%).</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.57 (2).jpeg" alt="" style={{ width: Math.round(IMG_W * 0.82), height: Math.round(IMG_H * 0.82), objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_BACK, boxShadow: IMG_SHADOW_BACK, opacity: 0.5, marginRight: -70, transform: 'rotate(-5deg)', transformOrigin: 'center bottom', zIndex: 1, flexShrink: 0 }} />
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.58 (1).jpeg" alt="" style={{ width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT, position: 'relative', zIndex: 2, flexShrink: 0 }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}