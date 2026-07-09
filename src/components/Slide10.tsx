import { useState, useEffect, useRef } from 'react';
import { Rocket, CheckCircle2, Key, ArrowRight, Target } from 'lucide-react';
import { Background } from './Background';

export function Slide10() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    recap: false,
    steps: false,
    cta: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const recapRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scroll para o topo ao entrar
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Configura o observador
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setVisibleSections(prev => ({ ...prev, header: true }));
            } else if (entry.target === recapRef.current) {
              setVisibleSections(prev => ({ ...prev, recap: true }));
            } else if (entry.target === stepsRef.current) {
              setVisibleSections(prev => ({ ...prev, steps: true }));
            } else if (entry.target === ctaRef.current) {
              setVisibleSections(prev => ({ ...prev, cta: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (recapRef.current) observer.observe(recapRef.current);
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

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
          <Rocket className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-[#000FCE]" />
          <h2 className="font-['Sora',sans-serif] text-white mb-2 md:mb-4 text-3xl md:text-6xl font-bold leading-tight">
            Próximos Passos<span className="text-[#000FCE]">.</span>
          </h2>
          <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-lg md:text-3xl">
            Transformando Potencial em Lucro
          </p>
        </div>

        {/* RECAPITULAÇÃO DA OPORTUNIDADE */}
        <div 
          ref={recapRef}
          className={`bg-[#000FCE]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border-2 border-[#000FCE]/30 transition-all duration-1000 delay-200 ${visibleSections.recap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="font-['Sora',sans-serif] text-white mb-6 md:mb-8 text-center text-xl md:text-3xl font-semibold">
            A Oportunidade é Clara
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-['Sora',sans-serif]">
            {/* Item 1 */}
            <div className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-gradient-to-r from-[#000FCE] to-[#001D3F] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-900/20">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-white mb-2 text-lg md:text-xl font-bold">Você tem</p>
              <p className="text-[#C4C4C4] text-sm md:text-base">Um restaurante de qualidade com capacidade ociosa no almoço</p>
            </div>
            
            {/* Item 2 */}
            <div className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-gradient-to-r from-[#000FCE] to-[#001D3F] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-900/20">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-white mb-2 text-lg md:text-xl font-bold">Nós trazemos</p>
              <p className="text-[#C4C4C4] text-sm md:text-base">Estratégia, branding e tráfego qualificado focado no almoço</p>
            </div>
            
            {/* Item 3 */}
            <div className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-900/20">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-white mb-2 text-lg md:text-xl font-bold">Resultado</p>
              <p className="text-[#C4C4C4] text-sm md:text-base">+10-15 clientes/dia = <span className="text-green-400 font-bold">R$ 12-22k adicional/mês</span></p>
            </div>
          </div>
        </div>

        {/* PASSOS PARA COMEÇAR */}
        <div 
          ref={stepsRef}
          className="mb-8 md:mb-10"
        >
          <h3 className={`font-['Sora',sans-serif] text-white mb-6 md:mb-8 text-center text-2xl md:text-4xl font-semibold transition-all duration-1000 ${visibleSections.steps ? 'opacity-100' : 'opacity-0'}`}>
            Como Começamos?
          </h3>
          
          <div className="space-y-4 md:space-y-6">
            {/* Passo 1 */}
            <div className={`bg-[#000FCE]/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-green-400 hover:bg-[#000FCE]/20 transition-all duration-700 delay-100 ${visibleSections.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-['Sora',sans-serif] text-lg md:text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="font-['Sora',sans-serif]">
                  <h4 className="text-white mb-1 md:mb-2 text-lg md:text-2xl font-bold">Aprovação da Proposta</h4>
                  <p className="text-[#C4C4C4] text-sm md:text-base leading-relaxed">
                    Você aprova o Setup Inicial + Plano Ideal Mensal e assinamos o contrato de parceria.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 2 */}
            <div className={`bg-[#000FCE]/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-purple-400 hover:bg-[#000FCE]/20 transition-all duration-700 delay-300 ${visibleSections.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-['Sora',sans-serif] text-lg md:text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="font-['Sora',sans-serif]">
                  <h4 className="text-white mb-1 md:mb-2 text-lg md:text-2xl font-bold">Início do Setup de Branding</h4>
                  <p className="text-[#C4C4C4] text-sm md:text-base leading-relaxed">
                    Nossa equipe inicia imediatamente a análise e criação do novo posicionamento de marca. Você terá updates semanais.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 3 */}
            <div className={`bg-[#000FCE]/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-blue-400 hover:bg-[#000FCE]/20 transition-all duration-700 delay-500 ${visibleSections.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-['Sora',sans-serif] text-lg md:text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="font-['Sora',sans-serif]">
                  <h4 className="text-white mb-1 md:mb-2 text-lg md:text-2xl font-bold">Acesso às Contas de Anúncios</h4>
                  <p className="text-[#C4C4C4] text-sm md:text-base leading-relaxed">
                    Você nos fornece acesso ao Google Meu Negócio, Google Ads e Meta Business Manager para configurarmos tudo estrategicamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div 
          ref={ctaRef}
          className={`bg-[#000FCE]/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#000FCE]/30 text-center transition-all duration-1000 delay-300 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-2xl mx-auto">
            <Key className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[#000FCE]" />
            <h3 className="font-['Sora',sans-serif] text-white mb-4 text-2xl md:text-4xl font-bold">
              Pronto para Crescer?
            </h3>
            <p className="font-['Sora',sans-serif] text-[#C4C4C4] mb-6 text-base md:text-lg leading-relaxed">
              O Cevada&Brasas tem tudo para ser o destino favorito de almoço da região. Só falta transformar esse potencial em realidade.
            </p>
            
            <div className="bg-gradient-to-r from-[#000FCE]/20 to-[#001D3F]/20 backdrop-blur-sm rounded-lg p-6 border-2 border-[#000FCE] hover:border-white/50 transition-colors cursor-pointer group">
              <p className="font-['Sora',sans-serif] text-white mb-2 text-xl md:text-2xl font-bold group-hover:scale-105 transition-transform">
                Vamos começar hoje?
              </p>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm md:text-base">
                Entre em contato para agendar uma reunião e definir os próximos passos. Estamos prontos para fazer acontecer.
              </p>
            </div>
          </div>
        </div>

        {/* ASSINATURA */}
        <div 
          className={`mt-10 text-center font-['Sora',sans-serif] transition-opacity duration-1000 delay-1000 ${visibleSections.cta ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="h-px bg-[#000FCE]/30 w-32 mx-auto mb-6"></div>
          <p className="text-[#C4C4C4] text-sm md:text-base">
            Proposta preparada especialmente para Cevada&Brasas
          </p>
          <p className="text-[#C4C4C4]/70 mt-2 text-xs md:text-sm">
            Investimento estratégico com foco em resultados mensuráveis
          </p>
        </div>
      </div>
    </div>
  );
}