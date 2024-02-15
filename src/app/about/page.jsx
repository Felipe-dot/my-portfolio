"use client";

import { motion } from "framer-motion";
import ListItem from "@src/components/listItem";
const AboutPage = () => {
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
      <div className="h-full overflow-scroll">
        {/* text container */}
        <div className="p-4 sm:p-8 mid:p-12 lg:p-20 xl:48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biograpgy container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              aliquid eaque voluptatibus atque minus expedita sint praesentium
              harum sapiente unde. Deleniti blanditiis placeat alias reiciendis
              autem aliquam quo delectus expedita?
            </p>
            <span className="italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
            <div></div>
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
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              {skills.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </div>
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
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl ">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              <ListItem
                left={{
                  jobTitle: "Senior JavaScript Engineer",
                  jobDesc:
                    "I led web development, offering expertise in JavaScript frameworks.",
                  jobDate: "2024 - Present",
                  jobCompany: "Apple",
                }}
                right={{}}
              />
              <ListItem
                right={{
                  jobTitle: "Senior React Developer",
                  jobDesc:
                    "I spearheaded React-based application development, leveraging advanced skills.",
                  jobDate: "2019 - 2024",
                  jobCompany: "Microsoft",
                }}
                left={{}}
              />
              <ListItem
                left={{
                  jobTitle: "Freelancer",
                  jobDesc:
                    " I provided web solutions, applying a range of technologies to address client requirements.",
                  jobDate: "2010 - 2019",
                  jobCompany: "",
                }}
                right={{}}
              />
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hiddren"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
