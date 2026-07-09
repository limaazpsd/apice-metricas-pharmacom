import { useState, useEffect, useRef } from 'react';
import { MapPin, Star, Tag, TrendingUp, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { Background } from './Background';

export function Slide7() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    priority: false,
    actions: false,
    promos: false,
    result: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const priorityRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const promosRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

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
            } else if (entry.target === priorityRef.current) {
              setVisibleSections(prev => ({ ...prev, priority: true }));
            } else if (entry.target === actionsRef.current) {
              setVisibleSections(prev => ({ ...prev, actions: true }));
            } else if (entry.target === promosRef.current) {
              setVisibleSections(prev => ({ ...prev, promos: true }));
            } else if (entry.target === resultRef.current) {
              setVisibleSections(prev => ({ ...prev, result: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (priorityRef.current) observer.observe(priorityRef.current);
    if (actionsRef.current) observer.observe(actionsRef.current);
    if (promosRef.current) observer.observe(promosRef.current);
    if (resultRef.current) observer.observe(resultRef.current);

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
            <span className="text-white font-['Sora',sans-serif] text-sm md:text-base">O Pilar de Crescimento</span>
          </div>
          <h2 className="font-['Sora',sans-serif] text-white mb-2 md:mb-4 text-2xl md:text-5xl font-bold leading-tight">
            Otimização do Google (GMB)<span className="text-[#000FCE]">.</span>
          </h2>
          <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-lg md:text-2xl">
            e Ofertas Estratégicas
          </p>
        </div>

        {/* POR QUE É PRIORIDADE */}
        <div 
          ref={priorityRef}
          className={`bg-gradient-to-r from-blue-600/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-blue-500/30 mb-8 md:mb-12 transition-all duration-1000 delay-200 ${visibleSections.priority ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/30 flex-shrink-0">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-['Sora',sans-serif] text-white mb-3 text-xl md:text-2xl font-bold flex items-center gap-2">
                Por Que GMB é Prioridade #1?
                <ArrowUpRight className="w-5 h-5 text-blue-400 hidden md:block" />
              </h3>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] mb-4 text-base md:text-lg leading-relaxed">
                <strong className="text-white">80% das pessoas</strong> que buscam "restaurante perto de mim" tomam uma decisão em menos de 24 horas. Se você não aparece em primeiro, você perde a venda para o concorrente da esquina.
              </p>
              
              <div className="bg-blue-500/10 rounded-lg p-3 md:p-4 border-l-4 border-blue-500">
                <p className="font-['Sora',sans-serif] text-blue-100 text-sm md:text-base italic">
                  "Estar no topo do Google Maps não é sorte — é estratégia e otimização constante."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AÇÕES ESTRATÉGICAS (GRID) */}
        <div 
          ref={actionsRef}
          className="mb-8 md:mb-12"
        >
          <h3 className={`font-['Sora',sans-serif] text-white mb-6 md:mb-8 text-center text-xl md:text-3xl font-semibold transition-all duration-1000 ${visibleSections.actions ? 'opacity-100' : 'opacity-0'}`}>
            Ações Estratégicas no GMB
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Otimização */}
            <div className={`bg-green-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-6 md:p-8 hover:bg-green-500/20 transition-all duration-700 delay-100 ${visibleSections.actions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                </div>
                <h4 className="font-['Sora',sans-serif] text-white text-lg md:text-2xl font-bold">
                  Otimização Completa
                </h4>
              </div>
              <ul className="space-y-3 md:space-y-4 font-['Sora',sans-serif] text-[#C4C4C4]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Fotos profissionais (pratos, ambiente, equipe)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Descrição com palavras-chave locais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Destaque para horários de almoço</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Atributos (Wi-Fi, Estacionamento)</span>
                </li>
              </ul>
            </div>

            {/* Card Gestão */}
            <div className={`bg-purple-500/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-6 md:p-8 hover:bg-purple-500/20 transition-all duration-700 delay-300 ${visibleSections.actions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <h4 className="font-['Sora',sans-serif] text-white text-lg md:text-2xl font-bold">
                  Gestão Ativa
                </h4>
              </div>
              <ul className="space-y-3 md:space-y-4 font-['Sora',sans-serif] text-[#C4C4C4]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Posts semanais com ofertas e novidades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Resposta rápida a todas avaliações</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Monitoramento de perguntas e respostas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Atualização constante de fotos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROMOÇÕES ESTRATÉGICAS */}
        <div 
          ref={promosRef}
          className={`bg-gradient-to-br from-[#000FCE]/20 to-[#001D3F]/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#000FCE]/50 mb-8 transition-all duration-1000 ${visibleSections.promos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-6 md:mb-8">
            <Tag className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[#000FCE]" />
            <h3 className="font-['Sora',sans-serif] text-white mb-2 text-xl md:text-3xl font-bold">
              Promoções Estratégicas
            </h3>
            <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm md:text-lg">
              Ofertas que convertem curiosidade em visitas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Promo 1 */}
            <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-xl p-5 border border-[#000FCE]/30 hover:border-[#000FCE] transition-colors group">
              <Award className="w-8 h-8 mb-3 text-[#000FCE] group-hover:scale-110 transition-transform" />
              <p className="font-['Sora',sans-serif] text-white mb-2 font-bold text-lg">Prato do Dia</p>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm leading-snug">
                Preço especial + promessa de rapidez no preparo
              </p>
            </div>
            
            {/* Promo 2 */}
            <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-xl p-5 border border-[#000FCE]/30 hover:border-[#000FCE] transition-colors group">
              <Award className="w-8 h-8 mb-3 text-[#000FCE] group-hover:scale-110 transition-transform" />
              <p className="font-['Sora',sans-serif] text-white mb-2 font-bold text-lg">Combo Executivo</p>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm leading-snug">
                Entrada + prato principal + sobremesa inclusa
              </p>
            </div>
            
            {/* Promo 3 */}
            <div className="bg-[#000FCE]/10 backdrop-blur-sm rounded-xl p-5 border border-[#000FCE]/30 hover:border-[#000FCE] transition-colors group">
              <Award className="w-8 h-8 mb-3 text-[#000FCE] group-hover:scale-110 transition-transform" />
              <p className="font-['Sora',sans-serif] text-white mb-2 font-bold text-lg">Happy Hour Almoço</p>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm leading-snug">
                Desconto exclusivo para os primeiros clientes do dia
              </p>
            </div>
          </div>
        </div>

        {/* RESULTADO ESPERADO */}
        <div 
          ref={resultRef}
          className={`bg-[#000FCE]/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#000FCE]/30 transition-all duration-1000 delay-200 ${visibleSections.result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="font-['Sora',sans-serif] text-white mb-2 text-lg md:text-2xl font-bold">
                Resultado Esperado
              </h4>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4] text-sm md:text-lg leading-relaxed">
                Aparecer em <span className="text-white font-bold">1º lugar</span> nas buscas locais + ofertas atrativas = aumento consistente de <span className="text-green-400 font-bold">10-15 novos clientes/dia</span> no horário de almoço.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}