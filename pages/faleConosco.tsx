import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import { FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import React from 'react';

import "@/app/globals.css";

const FaleConosco = () => {
  return (
    <div>
      <NavBar />
      <div className='w-full flex justify-center item-center' style={{ backgroundColor: "#000" }}>
        <div className='mt-20 w-full max-w-4xl pt-20 pb-20 p-4 text-center text-white'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl ">Fale Conosco </h1>
          <p className="text-lg font-normal lg:text-xl">Descubra o apoio necessário para cultivar sua saúde mental</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="max-w-sm mx-auto mt-8 mb-8">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" placeholder="nome@email.com" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
            <input type="phone" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" placeholder="+55000000000" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Nome Completo</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" required placeholder="Joana Oliveira" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Mensagem</label>
            <textarea id="message" rows={4} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" placeholder="Digite sua mensagem aqui" required></textarea>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eu concordo com os <a href="#" className="text-amber-600 hover:underline dark:text-amber-500">termos e condições</a></label>
          </div>
          <button
  style={{ width: "100%" }}
  type="submit"
  className="flex items-center justify-center text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
>
  <FaEnvelope className="text-lg mr-2" />
  Enviar Mensagem
</button>

            </form>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Motivos para entrar em contato:</h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>Dúvidas sobre nossos serviços de apoio à saúde mental.</li>
              <li>Solicitação de informações adicionais sobre programas de acompanhamento.</li>
              <li>Aconselhamento e orientação sobre questões específicas.</li>
              <li>Relato de experiências e feedback sobre nosso atendimento.</li>
              <li>Colaboração ou parceria em iniciativas de saúde mental.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <FaCommentAlt className="text-4xl text-amber-700" />
          <p className="ml-2 text-gray-800 text-lg">Estamos aqui para ouvir e oferecer apoio. Não hesite em nos contatar.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FaleConosco;
