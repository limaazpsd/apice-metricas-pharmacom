// Componente de fundo FINAL: Quadrados Rotacionados, Centrais e com Linhas Sutis.
// Este componente usa estilos CSS inline para aplicar bordas, rotação e posicionamento.
import React from 'react';

// --- NOVAS CONFIGURAÇÕES DE COR E ESTILO ---
// 1. Fundo Principal
const BACKGROUND_COLOR_CLASS = 'bg-[#070D14]';

// 2. Cor da Linha: #000FCE com 35% de opacidade
const BORDER_COLOR_RGBA_35 = 'rgba(0, 15, 206, 0.35)';

// 3. Cor da Iluminação (Glow Radial): #000FCE com 15% de opacidade (para o gradiente)
const GLOW_COLOR_RGBA_15 = 'rgba(0, 15, 206, 0.15)';

// Ajustes de Visual para o Quadrado/Retângulo
const ROTATION_DEG = 25.23; 
const LINE_COUNT = 50;      // Contagem mantida em 50 para alta densidade
const BORDER_RADIUS_PX = 80; 

// Espessura da borda aumentada para 4px
const BORDER_THICKNESS = '4px'; 

// Offset para remover as formas mais internas (menores) que pareciam círculos.
const START_INDEX_OFFSET = 4; 

// --- NOVAS CORES DO CÍRCULO GRADIENTE ---
const CIRCLE_START_COLOR = '#000FCE';
const CIRCLE_END_COLOR = '#0C1723';
const CIRCLE_OPACITY = '0.20';

// NOVO: Deslocamento do Centro (para mover para a esquerda e para baixo)
const SHIFT_X_VW = -10; // -10vw move 10% para a esquerda
const SHIFT_Y_VW = 5;   // 5vw move 5% para baixo

export function Background() {
  
  // Calcula o número real de elementos que serão renderizados
  const totalRenderedLines = LINE_COUNT - 1;

  return (
    // 1. Fundo principal (Absolute para cobrir todo o container pai)
    <div className={`absolute inset-0 overflow-hidden ${BACKGROUND_COLOR_CLASS}`}>
      
      {/* 2. Retângulos Concêntricos Rotacionados (Linhas Grossas) */}
      <div className="absolute inset-0">
        {[...Array(LINE_COUNT)].map((_, originalIndex) => {
          
          // Ajusta o índice para pular as primeiras formas (as mais centrais)
          const i = originalIndex + START_INDEX_OFFSET;

          // Espaçamento apertado e sutil
          const expansionFactor = i * 5.5; 
          
          // --- LÓGICA DE OPACIDADE GRADUAL AJUSTADA ---
          
          // 1. Encontrar o índice reverso (0 para o maior, N para o menor)
          const reverseIndex = totalRenderedLines - originalIndex;
          
          // 2. Calcular a opacidade
          let opacity = 1.0 - (reverseIndex * 0.08);

          // 3. Garantir que a opacidade não seja muito baixa
          opacity = Math.max(0.4, opacity);
          

          return (
            <div
              key={i}
              className="absolute"
              style={{
                // Bordas: 4px sólida na cor #000FCE com 35% de opacidade
                border: `${BORDER_THICKNESS} solid ${BORDER_COLOR_RGBA_35}`,
                
                // Bordas Muito Arredondadas
                borderRadius: `${BORDER_RADIUS_PX}px`,

                // POSICIONAMENTO: Expansão Simétrica a partir do Centro
                left: `calc(50% - ${expansionFactor}vw)`, 
                top: `calc(50% - ${expansionFactor}vw)`,  
                right: `calc(50% - ${expansionFactor}vw)`,
                bottom: `calc(50% - ${expansionFactor}vw)`, 

                // Rotação diagonal E Deslocamento para a esquerda/baixo
                transform: `translate(${SHIFT_X_VW}vw, ${SHIFT_Y_VW}vw) rotate(${ROTATION_DEG}deg)`,
                
                // Opacidade Gradual (mais visível agora)
                opacity: opacity,
              }}
            />
          );
        })}
      </div>

      {/* 3. Efeito Glow Sutil (Iluminação Gradiente Existente - Radial) */}
      {/* Mantido no canto superior-direito e com gradiente para a esquerda */}
      <div className="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            // Gradiente Radial (mantido da versão anterior)
            background: `radial-gradient(at top right, ${GLOW_COLOR_RGBA_15}, transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* 4. Círculo com Gradiente Linear no Canto Superior Direito (opacidade 20%) */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          opacity: CIRCLE_OPACITY, // Opacidade de 20%
          // Gradiente Linear de cima (to bottom) com as cores especificadas
          background: `linear-gradient(to bottom, ${CIRCLE_START_COLOR} 0%, ${CIRCLE_END_COLOR} 100%)`,
          // Um leve blur para suavizar as bordas do círculo de gradiente
          filter: 'blur(150px)',
          // Garante que o centro do círculo esteja no canto superior direito
          transform: 'translate(30%, -30%)', 
        }}
      />
    </div>
  );
}

// O componente deve ser exportado como default para ser renderizável
export default Background;