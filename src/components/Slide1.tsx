import { useState, useEffect } from 'react';
import { Eye, Users, Activity } from 'lucide-react';
import { SLIDE_BG_LEFT, GRID_CSS, SLIDE_PAD, SLIDE_PAD_MOBILE } from './design';

// ── Elegant stat card (no neon, matches the content slides' card system) ──────
function StatCard({ icon, value, label, sub, mobile }: { icon: React.ReactNode; value: string; label: string; sub?: string; mobile?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1,
        background: 'rgba(10, 15, 35, 0.92)',
        border: hov ? '1px solid rgba(37,99,235,0.55)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 18,
        padding: mobile ? '20px 24px' : '28px 34px',
        display: 'flex', alignItems: 'center', gap: mobile ? 16 : 20,
        boxShadow: hov
          ? '0 0 40px rgba(37,99,235,0.14), 0 6px 28px rgba(0,0,0,0.5)'
          : '0 4px 24px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.22s ease',
        cursor: 'default',
        minWidth: 0,
        width: '100%',
      }}
    >
      {/* Icon badge */}
      <div style={{
        width: mobile ? 44 : 52, height: mobile ? 44 : 52, borderRadius: 14, flexShrink: 0,
        background: 'rgba(29,78,216,0.2)',
        border: '1px solid rgba(37,99,235,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#60a5fa',
      }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ color: 'white', fontWeight: 800, fontSize: mobile ? 36 : 44, lineHeight: 1, margin: 0 }}>{value}</p>
        <p style={{ color: '#64748b', fontWeight: 600, fontSize: mobile ? 12 : 14, margin: '5px 0 0', letterSpacing: '0.05em' }}>{label}</p>
        {sub && <p style={{ color: '#34d399', fontWeight: 600, fontSize: mobile ? 11 : 13, margin: '3px 0 0' }}>{sub}</p>}
      </div>
    </div>
  );
}

// ── Slide 1 ───────────────────────────────────────────────────────────────────
export function Slide1({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 80); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1440 : 1080;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: W, height: H, background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}
    >
      {/* Grid mesh */}
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      {/* Ambient center glow */}
      <div className="absolute pointer-events-none" style={{
        width: mobile ? 700 : 1100, height: mobile ? 600 : 800, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 65%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      {/* ── Content block — vertically centered in the full canvas ── */}
      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-all duration-900 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={mobile ? SLIDE_PAD_MOBILE : { padding: '100px 240px 90px' }}
      >
        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '9px 24px', borderRadius: 999,
          background: 'rgba(29,78,216,0.1)',
          border: '1px solid rgba(37,99,235,0.3)',
          marginBottom: mobile ? 24 : 36,
        }}>
          <span style={{ color: '#60a5fa', fontSize: 18, lineHeight: 1 }}>📊</span>
          <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: mobile ? 11 : 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Relatório de Performance · Instagram
          </span>
        </div>

        {/* Title — Sora Black, tight leading */}
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          fontSize: mobile ? 80 : 118,
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          color: 'white',
          margin: 0,
          marginBottom: mobile ? 16 : 22,
        }}>
          Métricas<br />
          <span style={{ color: '#1d4ed8' }}>Pharmacom</span>
          <span style={{ color: 'white' }}>.</span>
        </h1>

        {/* Blue accent divider — tight to the title */}
        <div style={{ height: 3, width: mobile ? 60 : 80, borderRadius: 99, background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', marginBottom: mobile ? 20 : 28 }} />

        {/* Subtitle — closer to title, lighter weight */}
        <p style={{
          color: 'rgba(255,255,255,0.72)',
          fontWeight: 500,
          fontSize: mobile ? 20 : 26,
          textAlign: 'center',
          letterSpacing: '-0.01em',
          margin: 0,
          marginBottom: 10,
        }}>
          Estratégia de Conteúdo e Visão Geral de Resultados
        </p>

        {/* Period */}
        <p style={{ color: '#475569', fontSize: mobile ? 15 : 18, fontWeight: 500, margin: 0, marginBottom: mobile ? 40 : 60, textAlign: 'center' }}>
          Período analisado:{mobile ? <br /> : <span>&nbsp;</span>}
          <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>28 de Maio a 06 de Julho de 2025</span>
        </p>

        {/* ── 3 metric cards ── */}
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 16 : 20, width: '100%', maxWidth: mobile ? 600 : 'none' }}>
          <StatCard
            icon={<Eye size={mobile ? 20 : 24} />}
            value="34.306"
            label="VISUALIZAÇÕES TOTAIS"
            sub="98,5% público seguidor"
            mobile={mobile}
          />
          <StatCard
            icon={<Users size={mobile ? 20 : 24} />}
            value="7.051"
            label="ALCANCE TOTAL"
            sub="+100.628% vs período anterior"
            mobile={mobile}
          />
          <StatCard
            icon={<Activity size={mobile ? 20 : 24} />}
            value="509"
            label="AÇÕES NO PERFIL"
            sub="+74,3% visitas ao perfil"
            mobile={mobile}
          />
        </div>
      </div>
    </div>
  );
}