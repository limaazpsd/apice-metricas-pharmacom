// Componente de fundo FINAL: Quadrados Rotacionados com BORDAS (linhas grossas, arredondadas, sem preenchimento).
export function Background() {
  
  // Cores da Referência
  const BACKGROUND_COLOR_CLASS = 'bg-[#0F1528]'; // Fundo Azul Marinho Escuro
  const LINE_COLOR_HEX = '#344A8C';             // Cor da Borda (Linha) Azul/Violeta
  
  // Ajustes de Visual para o Quadrado/Retângulo com Borda
  const ROTATION_DEG = 25.23;                   // Rotação exata do seu CSS original
  const LINE_COUNT = 15;                        // Número de formas (linhas)
  const BORDER_WIDTH = '2px';                   // Espessura da borda (linha)
  const BORDER_RADIUS_VALUE = '15px';           // Arredondamento das bordas (para os cantos suaves)
  const LINE_OPACITY = 0.4;                     // Opacidade da linha (para ser visível, mas sutil)


  return (
    // 1. Fundo principal
    <div className={`absolute inset-0 overflow-hidden ${BACKGROUND_COLOR_CLASS}`}>
      
      {/* 2. Formas Quadradas Rotacionadas com Borda */}
      <div className="absolute inset-0">
        {[...Array(LINE_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              // AQUI É A MUDANÇA PRINCIPAL: Usamos 'border' em vez de 'backgroundColor'
              border: `${BORDER_WIDTH} solid ${LINE_COLOR_HEX}`,
              
              // SEM PREENCHIMENTO INTERNO (background-color é transparente por padrão agora)
              
              // Bordas Sutilmente Arredondadas (para os cantos suaves)
              borderRadius: BORDER_RADIUS_VALUE, 
              
              // POSICIONAMENTO CENTRADO E EXPANSÃO SIMÉTRICA (para evitar bordas laterais)
              // left/right/top/bottom se movem de forma simétrica para fora (expansão a partir do centro)
              left: `${10 - i * 3}%`,    
              right: `${10 - i * 3}%`,   
              top: `${10 - i * 3}%`,     
              bottom: `${10 - i * 3}%`,  
              
              transform: `rotate(${ROTATION_DEG}deg)`,
              opacity: LINE_OPACITY - (i * 0.02), // Opacidade decrescente para as linhas mais externas
            }}
          />
        ))}
      </div>

      {/* 3. Efeito Glow Sutil (Mantido para a luz e cor azul vibrante no canto) */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-20"> 
        <div className="absolute inset-0 bg-gradient-to-