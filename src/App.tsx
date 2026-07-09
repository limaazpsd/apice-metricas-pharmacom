import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';

const DESKTOP = { W: 1920, H: 1080 };
const MOBILE  = { W: 1080, H: 1440 };

const slides = [
  { component: Slide1, num: '01', title: 'INTRODUÇÃO' },
  { component: Slide2, num: '02', title: 'VISÃO GERAL' },
  { component: Slide3, num: '03', title: 'AUDIÊNCIA' },
  { component: Slide4, num: '04', title: 'CONTEÚDO' },
  { component: Slide5, num: '05', title: 'EXPANSÃO' },
  { component: Slide6, num: '06', title: 'CONCLUSÃO' },
];

function useLayout() {
  const calc = () => {
    const portrait = window.innerWidth < window.innerHeight;
    const { W, H } = portrait ? MOBILE : DESKTOP;
    return { W, H, isMobile: portrait, scale: Math.min(window.innerWidth / W, window.innerHeight / H) };
  };
  const [layout, setLayout] = useState(calc);
  useEffect(() => {
    const h = () => setLayout(calc());
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return layout;
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const { W, H, scale, isMobile } = useLayout();

  const goTo = (index: number) => {
    if (index === current || index < 0 || index >= slides.length) return;
    setVisible(false);
    setTimeout(() => { setCurrent(index); setVisible(true); }, 280);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current]);

  // Swipe support for mobile
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd); };
  }, [current]);

  const Comp = slides[current].component as React.ComponentType<{ mobile?: boolean }>;
  const scaledW = W * scale;
  const scaledH = H * scale;
  const { num, title } = slides[current];
  const navScale = Math.max(scale, 0.45);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#030712', position: 'relative', fontFamily: "'Sora', sans-serif" }}>

      {/* ── SLIDE CANVAS — only this wrapper has the opacity transition ── */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0 }}>
        <div
          style={{
            width: scaledW, height: scaledH,
            position: 'relative',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.28s ease',
          }}
        >
          <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
            <Comp mobile={isMobile} />
          </div>
        </div>
      </div>

      {/* ── HEADER & FOOTER NAV — strictly mapped to canvas dimensions ── */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <div style={{ width: scaledW, height: scaledH, position: 'relative' }}>
          <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>

            {/* HEADER */}
            <div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                zIndex: 500,
                padding: isMobile ? '40px 60px' : '24px 80px',
                background: 'linear-gradient(to bottom, rgba(7,13,20,1) 0%, rgba(7,13,20,0.92) 70%, transparent 100%)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 24 : 16 }}>
                <span style={{ color: '#1d4ed8', fontWeight: 800, fontSize: isMobile ? 54 : 24, letterSpacing: 2 }}>{num}</span>
                <div style={{ width: 2, height: isMobile ? 48 : 24, background: 'rgba(255,255,255,0.2)' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: isMobile ? 26 : 14, letterSpacing: '0.22em' }}>{title}</span>
              </div>
              <img src="/apice-digital.png" alt="Ápice" style={{ height: isMobile ? 80 : 34, objectFit: 'contain' }} />
            </div>

            {/* FOOTER */}
            <div style={{ position: 'absolute', bottom: isMobile ? 50 : 24, left: '50%', transform: 'translateX(-50%)', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 24 : 12, pointerEvents: 'auto' }}>
              {/* Progress segments */}
              <div style={{ display: 'flex', gap: isMobile ? 12 : 8, width: isMobile ? 640 : 420 }}>
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    onMouseEnter={() => setHoveredSlide(i)}
                    onMouseLeave={() => setHoveredSlide(null)}
                    title={s.title}
                    style={{
                      flex: 1, height: isMobile ? 8 : 5, borderRadius: 999, border: 'none', cursor: 'pointer',
                      background: i === current ? '#1d4ed8' : i < current ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)',
                      boxShadow: i === current ? '0 0 10px rgba(29,78,216,0.7)' : 'none',
                      transition: 'all 0.3s ease',
                      transform: hoveredSlide === i ? 'scaleY(1.8)' : 'scaleY(1)',
                      minWidth: 0,
                    }}
                  />
                ))}
              </div>

              {/* Pill */}
              <div style={{
                background: 'rgba(10, 15, 35, 0.88)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999,
                padding: isMobile ? '16px 40px' : '12px 30px',
                display: 'flex', alignItems: 'center', gap: isMobile ? 48 : 32,
              }}>
                <button
                  onClick={prev} disabled={current === 0}
                  style={{ background: 'none', border: 'none', cursor: current === 0 ? 'default' : 'pointer', color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
                >
                  <ChevronLeft size={isMobile ? 32 : 22} />
                </button>
                <div style={{ textAlign: 'center', userSelect: 'none' }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: isMobile ? 16 : 11, fontWeight: 700, letterSpacing: '0.2em', marginBottom: isMobile ? 6 : 2 }}>{title}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: isMobile ? 28 : 18 }}>{current + 1} / {slides.length}</div>
                </div>
                <button
                  onClick={next} disabled={current === slides.length - 1}
                  style={{ background: 'none', border: 'none', cursor: current === slides.length - 1 ? 'default' : 'pointer', color: current === slides.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
                >
                  <ChevronRight size={isMobile ? 32 : 22} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}