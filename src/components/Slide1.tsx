import { useState, useEffect } from 'react';
import { Eye, Users, Activity } from 'lucide-react';
import { SLIDE_BG_LEFT, GRID_CSS } from './design';

// ── Elegant stat card (no neon, matches the content slides' card system) ──────
function StatCard({ icon, value, label, sub }: { icon: React.ReactNode; value: string; label: string; sub?: string }) {
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
        padding: '28px 34px',
        display: 'flex', alignItems: 'center', gap: 20,
        boxShadow: hov
          ? '0 0 40px rgba(37,99,235,0.14), 0 6px 28px rgba(0,0,0,0.5)'
          : '0 4px 24px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.22s ease',
        cursor: 'default',
        minWidth: 0,
      }}
    >
      {/* Icon badge */}
      <div style={{
        width: 52, height: 52, borderRadius: 14, flexShrink: 0,
        background: 'rgba(29,78,216,0.2)',
        border: '1px solid rgba(37,99,235,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#60a5fa',
      }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ color: 'white', fontWeight: 800, fontSize: 44, lineHeight: 1, margin: 0 }}>{value}</p>
        <p style={{ color: '#64748b', fontWeight: 600, fontSize: 14, margin: '5px 0 0', letterSpacing: '0.05em' }}>{label}</p>
        {sub && <p style={{ color: '#34d399', fontWeight: 600, fontSize: 13, margin: '3px 0 0' }}>{sub}</p>}
      </div>
    </div>
  );
}

// ── Slide 1 ───────────────────────────────────────────────────────────────────
export function Slide1() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div
      className="relative w-[1920px] h-[1080px] overflow-hidden"
      style={{ background: '#070D14', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}
    >
      {/* Grid mesh */}
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      {/* Ambient center glow */}
      <div className="absolute pointer-events-none" style={{
        width: 1100, height: 800, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 65%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      {/* ── Content block — vertically centered in the full canvas ── */}
      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-all duration-900 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ padding: '100px 240px 90px' }}
      >
        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '9px 24px', borderRadius: 999,
          background: 'rgba(29,78,216,0.1)',
          border: '1px solid rgba(37,99,235,0.3)',
          marginBottom: 36,
        }}>
          <span style={{ color: '#60a5fa', fontSize: 18, lineHeight: 1 }}>📊</span>
          <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Relatório de Performance · Instagram
          </span>
        </div>

        {/* Title — Sora Black, tight leading */}
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          fontSize: 118,
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          color: 'white',
          margin: 0,
          marginBottom: 22,
        }}>
          Métricas<br />
          <span style={{ color: '#1d4ed8' }}>Pharmacom</span>
          <span style={{ color: 'white' }}>.</span>
        </h1>

        {/* Blue accent divider — tight to the title */}
        <div style={{ height: 3, width: 80, borderRadius: 99, background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', marginBottom: 28 }} />

        {/* Subtitle — closer to title, lighter weight */}
        <p style={{
          color: 'rgba(255,255,255,0.72)',
          fontWeight: 500,
          fontSize: 26,
          textAlign: 'center',
          letterSpacing: '-0.01em',
          margin: 0,
          marginBottom: 10,
        }}>
          Estratégia de Conteúdo e Visão Geral de Resultados
        </p>

        {/* Period */}
        <p style={{ color: '#475569', fontSize: 18, fontWeight: 500, margin: 0, marginBottom: 60 }}>
          Período analisado:&nbsp;
          <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>28 de Maio a 06 de Julho de 2025</span>
        </p>

        {/* ── 3 metric cards ── */}
        <div style={{ display: 'flex', gap: 20, width: '100%' }}>
          <StatCard
            icon={<Eye size={24} />}
            value="34.306"
            label="VISUALIZAÇÕES TOTAIS"
            sub="98,5% público seguidor"
          />
          <StatCard
            icon={<Users size={24} />}
            value="7.051"
            label="ALCANCE TOTAL"
            sub="+100.628% vs período anterior"
          />
          <StatCard
            icon={<Activity size={24} />}
            value="509"
            label="AÇÕES NO PERFIL"
            sub="+74,3% visitas ao perfil"
          />
        </div>
      </div>
    </div>
  );
}