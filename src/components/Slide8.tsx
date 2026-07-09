import { useState, useEffect, useRef } from 'react';
import { Calendar, CheckCircle2, Rocket } from 'lucide-react';
import { Background } from './Background';

export function Slide8() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. Garante que a visualização comece no topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 2. Mostra o Header/Overview imediatamente
    setTimeout(() => setHeaderVisible(true), 100);

    // 3. Configura o observador para os itens da timeline
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            
            // Adiciona o índice aos itens visíveis se ainda não estiver lá
            setVisibleItems((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      {
        threshold: 0.2, // Dispara quando 20% do item estiver visível
        rootMargin: '0px 0px -100px 0px' // Um pequeno offset inferior para a animação não acontecer muito na pontinha
      }
    );

    // Observa cada item da timeline referenciado
    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      week: 'Semana 1',
      number: '1',
      title: 'Setup de Branding',
      tasks: [
        'Análise de concorrência e público-alvo',
        'Criação de nova identidade visual',
        'Desenvolvimento de diretrizes de marca',
      ],
    },
    {
      week: 'Semana 2',
      number: '2',
      title: 'Otimização GMB',
      tasks: [
        'Configuração completa do Google Meu Negócio',
        'Upload de fotos profissionais',
        'Criação de posts e ofertas iniciais',
      ],
    },
    {
      week: 'Semana 3',
      number: '3',
      title: '1ª Sessão de Conteúdo',
      tasks: [
        'Sessão fotográfica profissional (pratos + ambiente)',
        'Produção de vídeos para Meta Ads',
        'Edição e aprovação do material',
      ],
    },
    {
      week: 'Semana 4',
      number: '4',
      title: 'Lançamento de Campanhas',
      tasks: [
        'Configuração de campanhas Google Ads',
        'Lançamento de campanhas Meta Ads (almoço)',
        'Monitoramento e otimização inicial',
      ],
    },
  ];

  return (
    <div className="relative min-h-[700px] flex items-center justify-center py-12">
      <Background />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Cabeçalho - Animação controlada por headerVisible */}
        <div className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-[#000FCE]/20 backdrop-blur-sm rounded-full border border-[#000FCE]/30 mb-6">
            <span className="text-white font-['Sora',sans-serif]">O Cronograma</span>
          </div>
          <h2 className="font-['Sora',sans-serif] text-white mb-4" style={{ fontSize: '48px' }}>
            Os Primeiros 30 Dias<span className="text-[#000FCE]">.</span>
          </h2>
          <p className="font-['Sora',sans-serif] text-[#C4C4C4]" style={{ fontSize: '24px' }}>
            Foco e Velocidade na Execução
          </p>
        </div>

        {/* Hero Banner - Anima logo após o cabeçalho */}
        <div className={`bg-gradient-to-r from-[#000FCE]/20 to-[#001D3F]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#000FCE]/50 mb-10 text-center transition-all duration-1000 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Rocket className="w-12 h-12 mx-auto mb-3 text-[#000FCE]" />
          <h3 className="font-['Sora',sans-serif] text-white mb-2" style={{ fontSize: '28px' }}>
            Início Rápido, Resultados Consistentes
          </h3>
          <p className="font-['Sora',sans-serif] text-[#C4C4C4]">
            Em 30 dias, sua marca estará completamente reposicionada e as primeiras campanhas estarão gerando tráfego qualificado para o salão.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical - Aparece junto com o primeiro item */}
          <div className={`hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#000FCE] to-[#001D3F] transition-opacity duration-1000 delay-300 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}></div>

          <div className="space-y-6">
            {timeline.map((item, index) => {
              const isItemVisible = visibleItems.includes(index);
              
              return (
                <div 
                  key={index} 
                  className="relative pl-0 md:pl-20"
                  ref={(el) => (itemsRef.current[index] = el)}
                  data-index={index}
                >
                  {/* Círculo numerado - USO DE MY-AUTO PARA CENTRO PERFEITO */}
                  <div 
                    className={`hidden md:flex absolute left-0 top-0 bottom-0 my-auto w-16 h-16 bg-gradient-to-r from-[#000FCE] to-[#001D3F] rounded-full items-center justify-center transition-all duration-700 ease-out`}
                    style={{ 
                      // Sem delay grande, anima assim que fica visível
                      transitionDelay: '0ms',
                      opacity: isItemVisible ? 1 : 0,
                      transform: isItemVisible ? 'scale(1)' : 'scale(0.5)'
                    }}
                  >
                    <span className="font-['Sora',sans-serif] text-white" style={{ fontSize: '24px' }}>
                      {item.number}
                    </span>
                  </div>

                  {/* Card de Conteúdo */}
                  <div 
                    className={`bg-[#000FCE]/10 backdrop-blur-sm border-2 border-[#000FCE]/50 rounded-2xl p-6 transition-all duration-700 ease-out`}
                    style={{ 
                      // Pequeno delay (200ms) para criar a progressão: Número -> Card
                      transitionDelay: '200ms',
                      opacity: isItemVisible ? 1 : 0,
                      transform: isItemVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-[#000FCE] to-[#001D3F] text-white px-4 py-1 rounded-lg font-['Sora',sans-serif]">
                        {item.week}
                      </div>
                      <Calendar className="w-5 h-5 text-[#000FCE]" />
                    </div>

                    <h4 className="font-['Sora',sans-serif] text-white mb-4" style={{ fontSize: '24px' }}>
                      {item.title}
                    </h4>

                    <ul className="space-y-3 font-['Sora',sans-serif]">
                      {item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#000FCE] flex-shrink-0 mt-0.5" />
                          <span className="text-[#C4C4C4]">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Final - Anima quando o último item da timeline for visível ou por observador próprio */}
        <div 
          className={`mt-10 bg-[#000FCE]/5 backdrop-blur-sm border-2 border-[#000FCE]/30 rounded-2xl p-6 transition-all duration-1000`}
          style={{
            opacity: visibleItems.includes(3) ? 1 : 0, // Aparece junto com a semana 4
            transform: visibleItems.includes(3) ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Sora',sans-serif] text-white mb-1" style={{ fontSize: '20px' }}>
                Execução Sem Enrolação
              </h4>
              <p className="font-['Sora',sans-serif] text-[#C4C4C4]">
                Cada semana tem entregas concretas. Você verá progresso real desde o primeiro dia, com transparência total sobre o que está sendo feito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}