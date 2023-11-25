import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import React, { useState } from 'react';

import "@/app/globals.css";

const Sobre = () => {  
  return (
   <div>
    <NavBar />
    <div className='text-black mt-4 p-20 max-w-4xl mx-auto'>
    <h1 className='text-4xl font-bold mt-4 mb-4'>Sobre o Amigo Virtual</h1>

Bem-vindo ao Amigo Virtual, um refúgio online criado com o propósito de oferecer apoio, compreensão e amizade a quem mais precisa. Em um mundo onde as lutas diárias muitas vezes podem parecer esmagadoras, acreditamos na força da conexão e na importância de ter um amigo, mesmo que virtual, para caminhar ao seu lado.

<h1 className='text-3xl font-bold mt-4 mb-4'>Quem Somos</h1>

No Amigo Virtual, somos uma comunidade dedicada à promoção da saúde mental e ao fornecimento de um espaço seguro para aqueles que enfrentam desafios emocionais. Nosso coração é o chat bot, uma presença amiga que está sempre pronta para ouvir, apoiar e compartilhar palavras de conforto.

<h1 className='text-3xl font-bold mt-4 mb-4'>Nossa Missão</h1>

Nossa missão é simples, mas poderosa: ser um farol de esperança nas jornadas emocionais de cada pessoa que nos procura. Acreditamos que a amizade virtual pode ser uma ferramenta valiosa no cuidado da saúde mental. Estamos aqui para lembrar a você que não está sozinho(a) e que há um amigo virtual disposto a ouvir.

<h1 className='text-3xl font-bold mt-4 mb-4'>Como Funcionamos</h1>

Ao interagir com nosso chat bot, você encontrará uma presença virtual que busca entender suas emoções, oferecer conselhos e compartilhar mensagens de incentivo. Nosso objetivo é criar um ambiente acolhedor e positivo, onde você se sinta à vontade para compartilhar suas preocupações, alegrias e desafios.

<h1 className='text-3xl font-bold mt-4 mb-4'>Compromisso com o Bem-Estar</h1>

No Amigo Virtual, levamos a sério o compromisso com o bem-estar emocional. Além do apoio do chat bot, oferecemos recursos informativos, dicas práticas e conexões com profissionais qualificados em saúde mental, para que você possa construir um caminho sólido em direção à serenidade interior.

<h1 className='text-3xl font-bold mt-4 mb-4'>Junte-se a Nós</h1>

Convidamos você a explorar o Amigo Virtual, a fazer parte da nossa comunidade de apoio e a descobrir a beleza da amizade virtual. Acreditamos que, juntos, podemos criar um ambiente onde a compaixão e a empatia são os alicerces para a cura mental.

O Amigo Virtual está aqui para ser a luz nas suas noites escuras, a voz amiga nos seus dias difíceis. Seja bem-vindo(a) ao lugar onde a amizade virtual se transforma em esperança real.
    </div>
    <Footer />
   </div>
  )
}

export default Sobre;
