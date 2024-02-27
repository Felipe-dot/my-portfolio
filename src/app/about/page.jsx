"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

import ListItem from "@src/components/listItem";
import Brain from "@src/components/brain";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skills = [
    "Javascript",
    "Typescript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Figma",
    "Git",
    "Flutter",
    "Dart",
    "Insomnia",
    "Java",
    "C",
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biograpgy container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">Biografia</h1>
            <p className="text-lg text-justify">
              Olá, me chamo Felipe, tenho 22 anos e sou formado em Ciência da
              Computação, além disso sou um entusiasta incansável do mundo
              digital. Meu conhecimento abrange uma ampla gama de tecnologias e
              de boas práticas no desenvolvimento, refletindo minha dedicação em
              explorar e dominar novas ferramentas. Sou uma pessoa versátil,
              encaro cada desafio como uma oportunidade de aprendizado e
              crescimento. Na minha visão, tecnologias novas não são obstáculos,
              mas sim convites para expandir meu repertório e aprimorar minhas
              habilidades.
            </p>
            <span className="italic">
              Truth can only be found in one place: the code.
            </span>

            <div className="self-end">
              <span>Uncle Bob</span>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* skills container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl "
            >
              HABILIDADES
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </motion.div>
            {/* scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience container  */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl "
            >
              EXPERIÊNCIA
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              <ListItem
                left={{
                  jobTitle: "Desenvolvedor de Software",
                  jobDesc:
                    "Eu criei interfaces mobile inovadoras usando Flutter",
                  jobDate: "2022 - 2023",
                  jobCompany: "UESPI",
                }}
                right={{}}
              />
              <ListItem
                right={{
                  jobTitle: "Suporte de TI",
                  jobDesc:
                    "Prestação de suporte técnico em tecnologia para o campus universitário",
                  jobDate: "2021 - 2022",
                  jobCompany: "UESPI",
                }}
                left={{}}
              />
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
