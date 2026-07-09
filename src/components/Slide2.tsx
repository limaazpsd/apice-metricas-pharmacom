import { useState, useEffect } from 'react';
import { Eye, Users, MousePointerClick, UserMinus } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BG_CARD_R,
  BORDER, BORDER_H, BORDER_R,
  SHADOW, SHADOW_H, SHADOW_R,
  BORDER_HOV, BORDER_H_HOV, BORDER_R_HOV,
  SHADOW_HOV, SHADOW_H_HOV, SHADOW_R_HOV,
  IMG_W, IMG_H, MOBILE_IMG_W, MOBILE_IMG_H,
  IMG_RADIUS, IMG_BORDER_FRONT, IMG_BORDER_BACK,
  IMG_SHADOW_FRONT, IMG_SHADOW_BACK,
} from './design';

type CardVariant = 'default' | 'highlight' | 'red';

interface MetricCardProps {
  index: number; hovered: number | null; setHovered: (i: number | null) => void;
  icon: React.ReactNode; iconBg: string; iconColor: string;
  label: string; value: string; sub: string; subGreen?: boolean; variant?: CardVariant;
  style?: React.CSSProperties; mobile?: boolean;
}

function MetricCard({ index, hovered, setHovered, icon, iconBg, iconColor, label, value, sub, subGreen, variant = 'default', style, mobile }: MetricCardProps) {
  const isHov = hovered === index;
  const bg    = variant === 'red' ? BG_CARD_R : variant === 'highlight' ? BG_CARD_H : BG_CARD;
  const bord  = isHov ? (variant === 'red' ? BORDER_R_HOV : variant === 'highlight' ? BORDER_H_HOV : BORDER_HOV) : (variant === 'red' ? BORDER_R : variant === 'highlight' ? BORDER_H : BORDER);
  const shad  = isHov ? (variant === 'red' ? SHADOW_R_HOV : variant === 'highlight' ? SHADOW_H_HOV : SHADOW_HOV) : (variant === 'red' ? SHADOW_R : variant === 'highlight' ? SHADOW_H : SHADOW);
  const valueColor = variant === 'red' ? '#f87171' : 'white';
  const subColor   = variant === 'red' ? '#9ca3af' : subGreen ? '#34d399' : '#64748b';
  const labelColor = variant === 'red' ? '#f87171' : '#94a3b8';
  return (
    <div
      onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
      style={{ background: bg, border: bord, boxShadow: shad, borderRadius: 16, padding: mobile ? '32px 28px' : '24px 26px', display: 'flex', flexDirection: 'column', cursor: 'default', transform: isHov ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.22s ease', ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <IconBadge color={iconColor} bg={iconBg} mobile={mobile}>{icon}</IconBadge>
        <span style={{ color: labelColor, fontSize: mobile ? 14 : 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</span>
      </div>
      <p style={{ color: valueColor, fontSize: mobile ? 56 : 54, fontWeight: 900, lineHeight: 1, margin: 0, marginBottom: 10 }}>{value}</p>
      <p style={{ color: subColor, fontSize: mobile ? 16 : 15, fontWeight: 500, margin: 0 }}>{sub}</p>
    </div>
  );
}

const cards = [
  { icon: <Eye size={22} />,              iconBg: 'rgba(37,99,235,0.25)', iconColor: '#60a5fa', label: 'Views Totais', value: '34.306', sub: '98,5% público seguidor',         variant: 'highlight' as CardVariant },
  { icon: <Users size={22} />,            iconBg: 'rgba(37,99,235,0.18)', iconColor: '#60a5fa', label: 'Alcance',      value: '7.051',  sub: '+100.628% vs anterior',           subGreen: true },
  { icon: <MousePointerClick size={22} />,iconBg: 'rgba(37,99,235,0.18)', iconColor: '#60a5fa', label: 'Atividade',    value: '509',    sub: '+74,3% visitas ao perfil',        subGreen: true },
  { icon: <UserMinus size={22} />,        iconBg: 'rgba(239,68,68,0.22)', iconColor: '#f87171', label: 'Seguidores',   value: '-2.644', sub: '+1.007 novos  |  -3.651 saíram', variant: 'red'  as CardVariant },
];

export function Slide2({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: W, height: H, background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div
        className={`relative z-10 w-full h-full flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={mobile ? { ...SLIDE_PAD_MOBILE, justifyContent: 'flex-end' } : SLIDE_PAD}
      >
        {mobile ? (
          // ── MOBILE LAYOUT ────────────────────────────────────────────────────
          <>
            {/* Absolute Top Image with padding from header, extended fade */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 950, zIndex: 0, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.57.jpeg" alt="" style={{ width: Math.round(MOBILE_IMG_W * 0.82), height: Math.round(MOBILE_IMG_H * 0.82), objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_BACK, boxShadow: IMG_SHADOW_BACK, opacity: 0.5, marginRight: -50, transform: 'rotate(-5deg)', transformOrigin: 'center bottom', zIndex: 1, flexShrink: 0 }} />
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.58.jpeg" alt="" style={{ width: MOBILE_IMG_W, height: MOBILE_IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT, position: 'relative', zIndex: 2, flexShrink: 0 }} />
              </div>
              {/* Fade: transparent until ~50% (475px), solid to bottom (950px) - covers written content area */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #070D14 90%, #070D14 100%)', zIndex: 3 }} />
            </div>
            
            {/* Written Content Group - pushed to bottom of content area, with footer padding */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, paddingBottom: 40 }}>
              <SectionTitle title="Visão Geral do Perfil." mobile={mobile} />
              {/* 2×2 grid - auto rows */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 20, width: '100%' }}>
                {cards.map((c, i) => <MetricCard key={i} index={i} hovered={hovered} setHovered={setHovered} mobile={mobile} {...c} />)}
              </div>
            </div>
          </>
        ) : (
          // ── DESKTOP LAYOUT ───────────────────────────────────────────────────
          <>
            <SectionTitle title="Visão Geral do Perfil." />
            {/* Row centered horizontally: cards (750px) + gap (48px) + images (~450px) = ~1248px centered in 1920px */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, width: '100%', paddingTop: 20 }}>
              {/* Left: 2×2 cards grid - fixed width, auto height */}
              <div style={{ width: 750, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 20 }}>
                {cards.map((c, i) => <MetricCard key={i} index={i} hovered={hovered} setHovered={setHovered} {...c} />)}
              </div>
              {/* Right: images - fixed width, TOP aligned (not vertical center) */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: 450 }}>
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.57.jpeg" alt="" style={{ width: Math.round(IMG_W * 0.82), height: Math.round(IMG_H * 0.82), objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_BACK, boxShadow: IMG_SHADOW_BACK, opacity: 0.5, marginRight: -70, transform: 'rotate(-5deg)', transformOrigin: 'center bottom', zIndex: 1, flexShrink: 0 }} />
                <img src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.58.jpeg" alt="" style={{ width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'top', borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT, position: 'relative', zIndex: 2, flexShrink: 0 }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}