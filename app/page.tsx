"use client"

import { useState } from "react";
import HappyBirthday from "./components/start/happy-birthday";
import TextSlice from "./utils/TextSlice";
import { CgGift } from "react-icons/cg";

export default function Home() {
  const [isLetter, setIsLetter] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white bg-black">
      {!isLetter ? (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <HappyBirthday />
          <button
            onClick={() => setIsLetter(true)}
            className="flex items-center justify-center gap-3 p-4 bg-white/10 transition-all rounded-lg hover:bg-red-500 hover:scale-110"
            aria-label="Abre la carta amor"
          >
            <p className="text-md font-bold "> Abre tu regalito amor</p>
            <CgGift size={24} />
          </button>
        </div>
      ) : (
        <div className="text-center max-w-xl px-4 animate-fade-in text-2xl md:text-3xl font-light tracking-wide">
          <TextSlice
            text={[
              "Pensaste que lo iba olvidar?",
              "Hay pocas cosas que no me gustan olvidar",
              "Sin duda, serás siempre una de ellas ❤️",
              "Amor... ¡Hoy! quiero desearte",
              "una excelente mañana 🌼",
              "un hermoso día ☀️",
              "una velada increíble 💗",
              "Porque hoy...",
              "Hoy...👀",
              "Nació hace 25 años una princesa 👸🏼 dormilona",
              "Y eso fue lo mejor que paso aquel día 🌹",
              "Te quiero Mucho Mi AMOR 🥰",
              "Feliz cumple Princesaaaaa 🥳🎂🥹"
            ]}
            typingSpeed={75}
            pauseDuration={1000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={40}
            cursorBlinkDuration={0.6}
            variableSpeed={{ min: 50, max: 150 }}
          />
        </div>
      )}
    </div>
  );
}
