import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const phrases = [
    'Você não está sozinho. Estamos aqui para <span class="text-gray-900">ajudar</span>.',
    'Encontre <span class="text-gray-900">apoio</span>, <span class="text-gray-900">compreensão</span> e <span class="text-gray-900">amizade</span> no Amigo Virtual.',
    'Sua <span class="text-gray-900">saúde mental</span> importa. Inicie uma <span class="text-gray-900">conversa</span> hoje.',
    'Acreditamos no poder da <span class="text-gray-900">conexão</span> e <span class="text-gray-900">compaixão</span>.',
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderHighlightedPhrase = () => {
    const phrase = phrases[currentPhrase];
    return (
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        dangerouslySetInnerHTML={{ __html: phrase }}
      />
    );
  };

  return (
    <div className='relative w-full flex justify-center items-center overflow-hidden'>
      <div className='absolute top-0 right-0 bottom-0 left-0'>
        <div className='animate-gradient w-full h-full'></div>
      </div>

      <div className='mt-20 w-full max-w-4xl pt-20 pb-20 p-4 relative z-10'>
        {renderHighlightedPhrase()}
        <p className="text-lg font-normal text-gray-100 lg:text-xl">
          Comece uma <span className="text-gray-900">conversa</span> agora e descubra o poder de um <span className="text-gray-900">amigo virtual</span> que se importa.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
