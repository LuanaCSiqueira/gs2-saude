import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const LoveWoman = () => {
  const phrases = [
    {
      text:
        'A esperança é a âncora que nos mantém firmes nos momentos mais sombrios. Se você está lutando, saiba que há ajuda, amor e apoio ao seu redor. Você não está sozinho.',
      color: 'bg-gradient-to-r from-amber-400 to-amber-600',
    },
    {
      text:
        'Cuide de sua saúde mental como cuida do seu corpo. Falar sobre o que você está passando é um ato de coragem e uma jornada em direção à cura. Você merece viver uma vida plena e significativa.',
      color: 'bg-gradient-to-r from-green-400 to-green-600',
    },
    {
      text:
        'A vida é cheia de altos e baixos, e pedir ajuda não é sinal de fraqueza, mas de força. Você é valioso, importante e merece viver. Há pessoas dispostas a ouvir e ajudar; não hesite em procurar apoio.',
      color: 'bg-gradient-to-r from-purple-400 to-purple-600',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Troca de frase a cada 3 segundos (ajuste conforme necessário)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-end item-center mt-4 pr-4 relative">
      <img
        src="/love.svg"
        style={{ maxWidth: '100px' }}
        alt="Love"
        className="mr-4"
      />

      <Transition
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className={`p-4 rounded-md ${phrases[index].color}`}>
          <p className="text-white text-xl font-bold">{phrases[index].text}</p>
        </div>
      </Transition>
    </div>
  );
};

export default LoveWoman;
