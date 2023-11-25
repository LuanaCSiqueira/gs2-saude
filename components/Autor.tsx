import React from 'react';

const Autor = () => {
  return (
    <div className="flex flex-col items-center mt-8">
        <h1 className='text-gray-900 font-bold text-3xl'>Sobre a Desenvolvedora</h1>
    <div className="relative w-32 h-32 rounded-full overflow-hidden mt-8">
      <img
        className="w-full h-full object-cover"
        src="/autor.jpg" 
        alt="Author"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500 to-amber-700 opacity-40"></div>
    </div>
    <div className="mt-4">
      <hr className="border-t-2 border-amber-500 w-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-900">Luana Siqueira</h3>
      <p className="text-gray-700">Desenvolvedora do Website</p> rm97822
      <p className="text-gray-700">FIAP - RM 97822</p>
      <div className="flex mt-2">
        <a
          href="https://www.linkedin.com/in/luana-de-siqueira-5a18551ba"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
  );
};

export default Autor;
