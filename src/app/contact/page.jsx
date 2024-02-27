"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [sucess, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Diga Olá";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 mid:px-12 lg:px-20 xl:48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
            👨‍💻
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-[500px] mb-2 mt-5 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-24"
        >
          <span>Querido Felipe,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>Meu endereço de email é:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Cumprimentos</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Enviar
          </button>
          {sucess && (
            <span className="text-green-600 font-semibold">
              Sua mensagem foi enviada com sucesso!
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">Algo deu errado!</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
