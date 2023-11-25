import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import React, { useState } from 'react';

import "@/app/globals.css";

const Informativos = () => {  
  return (
    <div>
      <NavBar/>
      <header className="text-center mt-20 p-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Informativos</h1>
        <p className="text-lg font-normal text-gray-700 mb-8">Explore informações valiosas sobre saúde e bem-estar.</p>
        <div className="border-b-2 border-amber-500 w-20 mx-auto mb-8"></div>
      </header>
      <div className="flex flex-wrap justify-center gap-4">
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Passos para a redução da mortalidade infantil</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A redução da mortalidade infantil é uma missão crucial que exige uma abordagem holística, integrando esforços em diversas áreas da saúde e desenvolvimento social. Primeiramente, investir em cuidados pré-natais abrangentes é fundamental. Garantir que as gestantes recebam acesso adequado a exames médicos, orientação nutricional e apoio emocional não apenas promove a saúde materna, mas também contribui significativamente para o desenvolvimento saudável do feto. Além disso, programas educativos direcionados a futuros pais desempenham um papel vital na disseminação de práticas saudáveis durante a gravidez e nos primeiros anos de vida do bebê..</p>
          </div>
      </a>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Combate a doenças transmissíveis</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">O combate a doenças transmissíveis é uma batalha global que exige cooperação, vigilância e respostas rápidas. Em primeiro lugar, investir em sistemas de saúde robustos e acessíveis é crucial para prevenir, detectar e controlar a propagação de doenças infecciosas. Isso inclui o fortalecimento de laboratórios de diagnóstico, a capacitação de profissionais de saúde e a promoção de campanhas de vacinação para comunidades vulneráveis.Além disso, a educação e a conscientização desempenham um papel vital na prevenção de doenças transmissíveis. Informar as comunidades sobre práticas higiênicas, medidas preventivas e a importância do distanciamento social durante surtos são estratégias cruciais. </p>
          </div>
      </a>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prevenção e tratamento de doenças não transmissíveisl</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A prevenção e tratamento de doenças não transmissíveis representam pilares fundamentais na construção de sociedades mais saudáveis e resilientes. A abordagem preventiva desempenha um papel crucial, enfocando a promoção de estilos de vida saudáveis, incluindo uma dieta equilibrada, atividade física regular e a redução de fatores de risco como tabagismo e consumo excessivo de álcool. Programas educativos e campanhas de conscientização desempenham um papel vital na capacitação das comunidades para adotar práticas de autocuidado e prevenção.</p>
          </div>
      </a>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Melhorias no quadro geral da saúde</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A busca pela melhoria geral da saúde requer um comprometimento abrangente com a promoção do bem-estar em todas as dimensões. Para alcançar isso, é crucial investir em educação para a saúde, capacitando as comunidades com conhecimentos sobre práticas saudáveis, alimentação balanceada e atividade física regular. Além disso, a promoção de ambientes saudáveis em níveis comunitários e urbanos desempenha um papel fundamental, incentivando escolhas saudáveis e tornando mais acessíveis opções que contribuam para um estilo de vida mais saudável.</p>
          </div>
      </a>
          </div>
      <Footer />
</div>
  )}

export default Informativos;
