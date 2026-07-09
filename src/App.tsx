import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';

const SLIDE_W = 1920;
const SLIDE_H = 1080;

const slides = [
  { component: Slide1, num: '01', title: 'INTRODUÇÃO' },
  { component: Slide2, num: '02', title: 'VISÃO GERAL' },
  { component: Slide3, num: '03', title: 'AUDIÊNCIA' },
  { component: Slide4, num: '04', title: 'CONTEÚDO' },
  { component: Slide5, num: '05', title: 'EXPANSÃO' },
  { component: Slide6, num: '06', title: 'CONCLUSÃO' },
];

function useScale() {
  const [scale, setScale] = useState(
    () => Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H)
  );
  useEffect(() => {
    const onResize = () =>
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return scale;
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const scale = useScale();

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

  const Comp = slides[current].component;
  const scaledW = SLIDE_W * scale;
  const scaledH = SLIDE_H * scale;
  const { num, title } = slides[current];
  const navScale = Math.max(scale, 0.45);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#030712', position: 'relative', fontFamily: "'Sora', sans-serif" }}>

      {/* ── HEADER — fixed at screen level, OUTSIDE the fade wrapper, NEVER flickers ── */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 500,                               // above everything
          padding: '18px 120px',
          background: 'linear-gradient(to bottom, rgba(7,13,20,1) 0%, rgba(7,13,20,0.92) 70%, transparent 100%)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: '#1d4ed8', fontWeight: 800, fontSize: 22, letterSpacing: 3 }}>{num}</span>
          <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: 13, letterSpacing: '0.22em' }}>{title}</span>
        </div>
        <img src="/apice-digital.png" alt="Ápice" style={{ height: 34, objectFit: 'contain' }} />
      </div>

      {/* ── SLIDE CANVAS — only this wrapper has the opacity transition ── */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: scaledW, height: scaledH,
            position: 'relative',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.28s ease',
          }}
        >
          <div style={{ width: SLIDE_W, height: SLIDE_H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
            <Comp />
          </div>
        </div>
      </div>

      {/* ── FOOTER NAV — fixed at screen level, NEVER flickers ── */}
      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        {/* Progress segments */}
        <div style={{ display: 'flex', gap: 6, width: Math.max(280, 380 * navScale) }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              onMouseEnter={() => setHoveredSlide(i)}
              onMouseLeave={() => setHoveredSlide(null)}
              title={s.title}
              style={{
                flex: 1, height: 5, borderRadius: 999, border: 'none', cursor: 'pointer',
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
          padding: `${Math.max(9, 12 * navScale)}px ${Math.max(22, 30 * navScale)}px`,
          display: 'flex', alignItems: 'center', gap: Math.max(22, 32 * navScale),
        }}>
          <button
            onClick={prev} disabled={current === 0}
            style={{ background: 'none', border: 'none', cursor: current === 0 ? 'default' : 'pointer', color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
          >
            <ChevronLeft size={Math.max(18, 22 * navScale)} />
          </button>
          <div style={{ textAlign: 'center', userSelect: 'none' }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: Math.max(9, 11 * navScale), fontWeight: 700, letterSpacing: '0.2em', marginBottom: 2 }}>{title}</div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: Math.max(14, 18 * navScale) }}>{current + 1} / {slides.length}</div>
          </div>
          <button
            onClick={next} disabled={current === slides.length - 1}
            style={{ background: 'none', border: 'none', cursor: current === slides.length - 1 ? 'default' : 'pointer', color: current === slides.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
          >
            <ChevronRight size={Math.max(18, 22 * navScale)} />
          </button>
        </div>
      </div>
    </div>
  );
}