import { useState, useEffect } from 'react';

// ── Layout detection ──────────────────────────────────────────────────────────
export function useIsMobile() {
  const [m, setM] = useState(() => window.innerWidth < window.innerHeight);
  useEffect(() => {
    const h = () => setM(window.innerWidth < window.innerHeight);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return m;
}

// Shared design constants for all slides
// Fixed App header is ~70px on screen. At scale 0.55, 130px slide-space → 71.5px screen — just clears the header.
export const SLIDE_PAD        = { padding: '130px 100px 72px' } as const;
export const SLIDE_PAD_MOBILE = { padding: '130px 70px 80px'  } as const;

// Mobile image sizes (Perfect iPhone 16:9 ratio to prevent cropping with cover)
export const MOBILE_IMG_W = 440;
export const MOBILE_IMG_H = 780;

// Card backgrounds
export const BG_CARD   = 'rgba(10, 15, 35, 0.9)';
export const BG_CARD_H = 'rgba(8, 14, 40, 0.95)';
export const BG_CARD_R = 'rgba(20, 8, 12, 0.92)';
export const BG_CARD_G = 'rgba(6, 20, 10, 0.92)';
export const BG_CARD_Y = 'rgba(18, 14, 6, 0.92)';

// Card borders
export const BORDER    = '1px solid rgba(255,255,255,0.07)';
export const BORDER_H  = '1px solid rgba(37,99,235,0.55)';
export const BORDER_R  = '1px solid rgba(239,68,68,0.45)';
export const BORDER_G  = '1px solid rgba(34,197,94,0.4)';
export const BORDER_Y  = '1px solid rgba(234,179,8,0.4)';

// Card shadows
export const SHADOW    = '0 4px 24px rgba(0,0,0,0.4)';
export const SHADOW_H  = '0 0 40px rgba(37,99,235,0.14), 0 4px 24px rgba(0,0,0,0.5)';
export const SHADOW_R  = '0 0 30px rgba(239,68,68,0.12), 0 4px 20px rgba(0,0,0,0.5)';
export const SHADOW_G  = '0 0 30px rgba(34,197,94,0.1), 0 4px 20px rgba(0,0,0,0.5)';
export const SHADOW_Y  = '0 0 30px rgba(234,179,8,0.08), 0 4px 20px rgba(0,0,0,0.5)';

// Hover shadows (more intense)
export const SHADOW_H_HOV = '0 0 60px rgba(37,99,235,0.25), 0 8px 32px rgba(0,0,0,0.6)';
export const SHADOW_R_HOV = '0 0 50px rgba(239,68,68,0.2), 0 8px 28px rgba(0,0,0,0.6)';
export const SHADOW_G_HOV = '0 0 50px rgba(34,197,94,0.18), 0 8px 28px rgba(0,0,0,0.6)';
export const SHADOW_HOV   = '0 0 40px rgba(37,99,235,0.1), 0 8px 28px rgba(0,0,0,0.5)';
export const SHADOW_Y_HOV = '0 0 40px rgba(234,179,8,0.15), 0 8px 24px rgba(0,0,0,0.5)';

// Hover borders
export const BORDER_H_HOV = '1px solid rgba(37,99,235,0.85)';
export const BORDER_R_HOV = '1px solid rgba(239,68,68,0.75)';
export const BORDER_G_HOV = '1px solid rgba(34,197,94,0.7)';
export const BORDER_HOV   = '1px solid rgba(37,99,235,0.4)';
export const BORDER_Y_HOV = '1px solid rgba(234,179,8,0.7)';

// Standard image dimensions — IDENTICAL across all slides
export const IMG_W = 360;
export const IMG_H = 570;
export const IMG_RADIUS = 20;
export const IMG_BORDER_FRONT = '2px solid rgba(37,99,235,0.3)';
export const IMG_BORDER_BACK  = '2px solid rgba(255,255,255,0.06)';
export const IMG_SHADOW_FRONT = '0 30px 60px rgba(0,0,0,0.85), 0 0 30px rgba(37,99,235,0.08)';
export const IMG_SHADOW_BACK  = '0 15px 40px rgba(0,0,0,0.6)';

// Background gradient + grid for all slides
export const SLIDE_BG_LEFT = `
  radial-gradient(ellipse 900px 900px at -5% -10%, rgba(0,15,206,0.14) 0%, transparent 70%),
  radial-gradient(ellipse 800px 800px at 105% 110%, rgba(0,29,63,0.18) 0%, transparent 70%)
`;
export const SLIDE_BG_RIGHT = `
  radial-gradient(ellipse 1000px 1000px at 110% -10%, rgba(0,29,63,0.2) 0%, transparent 70%),
  radial-gradient(ellipse 700px 700px at -5% 110%, rgba(0,15,206,0.1) 0%, transparent 70%)
`;
export const GRID_CSS = {
  backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

// Section title
export function SectionTitle({ title, mobile }: { title: string; mobile?: boolean }) {
  return (
    <>
      <h2 className="text-white font-extrabold leading-none tracking-tight" style={{ fontSize: mobile ? 76 : 66 }}>
        {title.replace(/\.$/, '')}<span style={{ color: '#1d4ed8' }}>.</span>
      </h2>
      <div style={{ height: mobile ? 4 : 3, width: mobile ? 110 : 90, borderRadius: 99, background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', marginTop: 12, marginBottom: mobile ? 48 : 38 }} />
    </>
  );
}

// Icon badge
export function IconBadge({ color, bg, children, mobile }: { color: string; bg: string; children: React.ReactNode; mobile?: boolean }) {
  const size = mobile ? 56 : 44;
  return (
    <span className="flex items-center justify-center rounded-xl" style={{ width: size, height: size, background: bg, color, flexShrink: 0, '& > svg': { width: mobile ? 28 : 20, height: mobile ? 28 : 20 } } as any}>
      {children}
    </span>
  );
}
