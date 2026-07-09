import { useState, useEffect } from 'react';
import { Eye, Users, MousePointerClick, UserMinus } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BG_CARD_R,
  BORDER, BORDER_H, BORDER_R,
  SHADOW, SHADOW_H, SHADOW_R,
  BORDER_HOV, BORDER_H_HOV, BORDER_R_HOV,
  SHADOW_HOV, SHADOW_H_HOV, SHADOW_R_HOV,
  IMG_W, IMG_H, IMG_RADIUS, IMG_BORDER_FRONT, IMG_BORDER_BACK,
  IMG_SHADOW_FRONT, IMG_SHADOW_BACK,
} from './design';

// ─── Metric Card ─────────────────────────────────────────────────────────────
type CardVariant = 'default' | 'highlight' | 'red';

interface MetricCardProps {
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  sub: string;
  subGreen?: boolean;
  variant?: CardVariant;
}

function MetricCard({ index, hovered, setHovered, icon, iconBg, iconColor, label, value, sub, subGreen, variant = 'default' }: MetricCardProps) {
  const isHov = hovered === index;

  const bg    = variant === 'red' ? BG_CARD_R : variant === 'highlight' ? BG_CARD_H : BG_CARD;
  const bord  = isHov
    ? (variant === 'red' ? BORDER_R_HOV : variant === 'highlight' ? BORDER_H_HOV : BORDER_HOV)
    : (variant === 'red' ? BORDER_R     : variant === 'highlight' ? BORDER_H     : BORDER);
  const shad  = isHov
    ? (variant === 'red' ? SHADOW_R_HOV : variant === 'highlight' ? SHADOW_H_HOV : SHADOW_HOV)
    : (variant === 'red' ? SHADOW_R     : variant === 'highlight' ? SHADOW_H     : SHADOW);

  const valueColor = variant === 'red' ? '#f87171' : 'white';
  const subColor   = variant === 'red' ? '#9ca3af' : subGreen ? '#34d399' : '#64748b';
  const labelColor = variant === 'red' ? '#f87171' : '#94a3b8';

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{
        background: bg, border: bord, boxShadow: shad,
        borderRadius: 16, padding: '28px 30px',
        display: 'flex', flexDirection: 'column',
        cursor: 'default',
        transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.22s ease',
      }}
    >
      {/* Icon + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <IconBadge color={iconColor} bg={iconBg}>{icon}</IconBadge>
        <span style={{ color: labelColor, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>
      {/* Value */}
      <p style={{ color: valueColor, fontSize: 64, fontWeight: 900, lineHeight: 1, margin: 0, marginBottom: 12 }}>{value}</p>
      {/* Sub */}
      <p style={{ color: subColor, fontSize: 16, fontWeight: 500, margin: 0 }}>{sub}</p>
    </div>
  );
}

// ─── Slide 2 ─────────────────────────────────────────────────────────────────
export function Slide2() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const cards = [
    { icon: <Eye size={22} />,              iconBg: 'rgba(37,99,235,0.25)', iconColor: '#60a5fa', label: 'Views Totais', value: '34.306', sub: '98,5% público seguidor',       variant: 'highlight' as CardVariant },
    { icon: <Users size={22} />,            iconBg: 'rgba(37,99,235,0.18)', iconColor: '#60a5fa', label: 'Alcance',      value: '7.051',  sub: '+100.628% vs anterior',         subGreen: true },
    { icon: <MousePointerClick size={22} />,iconBg: 'rgba(37,99,235,0.18)', iconColor: '#60a5fa', label: 'Atividade',    value: '509',    sub: '+74,3% visitas ao perfil',      subGreen: true },
    { icon: <UserMinus size={22} />,        iconBg: 'rgba(239,68,68,0.22)', iconColor: '#f87171', label: 'Seguidores',   value: '-2.644', sub: '+1.007 novos  |  -3.651 saíram', variant: 'red' as CardVariant },
  ];

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
        <SectionTitle title="Visão Geral do Perfil." />

        {/* Body row */}
        <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>

          {/* LEFT — 2×2 metric grid */}
          <div style={{
            flexShrink: 0, width: 750, height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 20,
          }}>
            {cards.map((c, i) => (
              <MetricCard key={i} index={i} hovered={hovered} setHovered={setHovered} {...c} />
            ))}
          </div>

          {/* RIGHT — stacked phone images (centered) */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.57.jpeg"
              alt=""
              style={{
                width: Math.round(IMG_W * 0.82), height: Math.round(IMG_H * 0.82),
                objectFit: 'cover', objectPosition: 'top',
                borderRadius: IMG_RADIUS, border: IMG_BORDER_BACK, boxShadow: IMG_SHADOW_BACK,
                opacity: 0.5, marginRight: -70,
                transform: 'rotate(-5deg)',
                transformOrigin: 'center bottom', zIndex: 1, flexShrink: 0,
              }}
            />
            <img
              src="/metricas-reais/WhatsApp Image 2026-07-07 at 17.16.58.jpeg"
              alt=""
              style={{
                width: IMG_W, height: IMG_H, objectFit: 'cover', objectPosition: 'top',
                borderRadius: IMG_RADIUS, border: IMG_BORDER_FRONT, boxShadow: IMG_SHADOW_FRONT,
                position: 'relative', zIndex: 2, flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}