"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 mid:px-12 lg:px-20 xl:48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero2.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-full flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Do código ao impacto, criando experiências memoráveis.
          </h1>
          <p className="md:text-xl">
            Como Desenvolvedor Full Stack, minha paixão reside na versatilidade
            das tecnologias e na busca incessante pelas melhores práticas de
            programação. Com um compromisso inabalável com a excelência, meu
            foco primordial é entregar resultados que transcendam as
            expectativas.
          </p>
          {/* buttons */}
          <div className="w-full flex gap-4 mb-2">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Veja meus trabalhos
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Entre em contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
