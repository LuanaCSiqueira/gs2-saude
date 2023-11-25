import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import LoveWoman from '@/components/loveWoman';
import NavBar from '@/components/navbar';
import Talk from '@/components/talk';
import React, { useState } from 'react';

import "@/app/globals.css";
import Video from '@/components/video'
import Autor from '@/components/Autor'

const Home = () => {  
  return (
   <div>
    <NavBar />
    <Carousel />
    <Talk />
    <Video/>
    <LoveWoman />
    <Autor />
    <Footer />
   </div>
  )
}

export default Home;
