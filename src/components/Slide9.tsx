import { useState, useEffect, useRef } from 'react';
import { DollarSign, Zap, RefreshCcw, CheckCircle2, TrendingUp } from 'lucide-react';
import { Background } from './Background';

export function Slide9() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    cards: false,
    roi: false,
    footer: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scroll para o topo ao entrar
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Configura o observador
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Identifica qual seção ficou visível
            if (entry.target === headerRef.current) {
              setVisibleSections(prev => ({ ...prev, header: true }));
            } else if (entry.target === cardsRef.current) {
              setVisibleSections(prev => ({ ...prev, cards: true }));
            } else if (entry.target === roiRef.current) {
              setVisibleSections(prev => ({ ...prev, roi: true }));
            } else if (entry.target === footerRef.current) {
              setVisibleSections(prev => ({ ...prev, footer: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observa os elementos
    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (roiRef.current) observer.observe(roiRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-8 md:py-12">
      <Background />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* CABEÇALHO */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-[#000FCE]/20 backdrop-blur-sm rounded-full border border-[#000FCE]/30 mb-4 md:mb-6">
            <span className="text-white font-['Sora',sans-serif] text-sm md:text-base">O Investimento</span>
          </div>
          <h2 className="font-['Sora',sans-serif] text-white mb-2 md:mb-4 text-3xl md:text-5xl font-bold leading-tight">
            Proposta de Valor<span className="text-[#000FCE]">.</span>
          </h2>
          <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-lg md:text-2xl">
            Setup + Gestão Estratégica
          </p>
        </div>

        {/* ESTRUTURA DE INVESTIMENTO (CARDS) */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10"
        >
          {/* Card 1: Setup Inicial */}
          <div 
            className={`bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-purple-500/30 transition-all duration-1000 delay-200 ${visibleSections.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              <h3 className="font-['Sora',sans-serif] text-white text-xl md:text-2xl font-semibold">
                Setup Inicial
              </h3>
            </div>

            <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-[#000FCE]/30">
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] mb-1 text-xs md:text-sm">Investimento Único</p>
              <p className="font-['Sora',sans-serif] text-white text-3xl md:text-5xl font-bold">R$ [VALOR]</p>
            </div>

            <div className="space-y-3 mb-6 font-['Sora',sans-serif]">
              <p className="text-white mb-2 md:mb-4 text-lg md:text-xl font-medium">O que está incluído:</p>
              
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Consultoria de Reposicionamento',
                  'Criação de Nova Identidade Visual',
                  'Otimização Completa do GMB',
                  '1ª Sessão de Fotos/Vídeos Profissionais',
                  'Configuração Inicial de Campanhas'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#C4C4C4] text-sm md:text-base leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-500/20 rounded-lg p-3 md:p-4 mt-auto">
              <p className="font-['Sora',sans-serif] text-purple-100 text-xs md:text-sm">
                <Zap className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                Investimento obrigatório, mas não recorrente
              </p>
            </div>
          </div>

          {/* Card 2: Plano Ideal Mensal */}
          <div 
            className={`relative bg-gradient-to-br from-green-500/20 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-4 border-green-500/50 transition-all duration-1000 delay-500 ${visibleSections.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#000FCE] to-[#001D3F] text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-['Sora',sans-serif] shadow-lg">
              Recomendado
            </div>
            
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <RefreshCcw className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
              <h3 className="font-['Sora',sans-serif] text-white text-xl md:text-2xl font-semibold">
                Plano Ideal Mensal
              </h3>
            </div>

            <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-[#000FCE]/30">
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] mb-1 text-xs md:text-sm">Mensalidade</p>
              <p className="font-['Sora',sans-serif] text-white mb-2 text-3xl md:text-5xl font-bold">R$ [VALOR]</p>
              <p className="font-['Sora',sans-serif] text-green-200 text-xs md:text-sm">
                + Verba de Anúncios (sugerida: R$ 1.5k-2.5k)
              </p>
            </div>

            <div className="space-y-3 mb-6 font-['Sora',sans-serif]">
              <p className="text-white mb-2 md:mb-4 text-lg md:text-xl font-medium">O que está incluído:</p>
              
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Gestão de Campanhas Google Ads (40%)',
                  'Gestão de Campanhas Meta Ads (60%)',
                  'Otimização Contínua do GMB',
                  '1 Sessão de Conteúdo/Mês (Fotos + Vídeos)',
                  'Relatórios de Performance Semanais',
                  'Ajustes e Testes A/B Constantes'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#C4C4C4] text-sm md:text-base leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-lg p-3 md:p-4 mt-auto">
              <p className="font-['Sora',sans-serif] text-green-100 text-xs md:text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                Gestão completa com foco em ROI
              </p>
            </div>
          </div>
        </div>

        {/* ROI ESTIMADO */}
        <div 
          ref={roiRef}
          className={`bg-gradient-to-r from-[#000FCE]/20 to-[#001D3F]/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#000FCE]/50 mb-8 transition-all duration-1000 ${visibleSections.roi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center">
            <DollarSign className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[#000FCE]" />
            <h3 className="font-['Sora',sans-serif] text-white mb-4 text-xl md:text-3xl font-semibold">
              Retorno sobre Investimento (ROI)
            </h3>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#000FCE]/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center font-['Sora',sans-serif]">
                  <div className="p-2">
                    <p className="text-[#C4C4C4] mb-1 md:mb-2 text-sm md:text-base">Meta Mensal</p>
                    <p className="text-white text-2xl md:text-4xl font-bold">+300-450</p>
                    <p className="text-[#C4C4C4] text-xs md:text-sm mt-1">novos clientes/mês</p>
                  </div>
                  <div className="p-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                    <p className="text-[#C4C4C4] mb-1 md:mb-2 text-sm md:text-base">Ticket Médio</p>
                    <p className="text-white text-2xl md:text-4xl font-bold">R$ 40-50</p>
                    <p className="text-[#C4C4C4] text-xs md:text-sm mt-1">por refeição</p>
                  </div>
                  <div className="p-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                    <p className="text-[#C4C4C4] mb-1 md:mb-2 text-sm md:text-base">Receita Adicional</p>
                    <p className="text-white text-2xl md:text-4xl font-bold text-green-400">R$ 12-22k</p>
                    <p className="text-[#C4C4C4] text-xs md:text-sm mt-1">por mês</p>
                  </div>
                </div>
              </div>
              
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] mt-6 text-sm md:text-base leading-relaxed">
                Com 10-15 novos clientes por dia no almoço, o investimento se paga e gera lucro significativo já no primeiro mês de operação completa.
              </p>
            </div>
          </div>
        </div>

        {/* OBSERVAÇÃO / FOOTER */}
        <div 
          ref={footerRef}
          className={`bg-[#000FCE]/5 backdrop-blur-sm border-2 border-[#000FCE]/30 rounded-2xl p-6 transition-all duration-1000 ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h4 className="font-['Sora',sans-serif] text-white mb-3 text-lg md:text-xl font-semibold">
            Estrutura de Pagamento
          </h4>
          <ul className="space-y-3 font-['Sora',sans-serif] text-[#C4C4C4]">
            <li className="flex items-start gap-2 text-sm md:text-base">
              <span className="text-[#000FCE] mt-1">•</span>
              <span><strong className="text-white">Setup Inicial:</strong> Pagamento único no início do projeto</span>
            </li>
            <li className="flex items-start gap-2 text-sm md:text-base">
              <span className="text-[#000FCE] mt-1">•</span>
              <span><strong className="text-white">Plano Mensal:</strong> Mensalidade fixa + verba de anúncios (paga diretamente ao Google/Meta)</span>
            </li>
            <li className="flex items-start gap-2 text-sm md:text-base">
              <span className="text-[#000FCE] mt-1">•</span>
              <span><strong className="text-white">Sem Surpresas:</strong> Valores transparentes, sem taxas ocultas</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}