"use client"

import { useState } from "react";

import HappyBirthday from "./components/start/happy-birthday";
import TextSlice from "./utils/TextSlice";

import Frames from "./components/album/frames";
import { LuMessageCircleHeart } from "react-icons/lu";
import HeartCursor from "./utils/HeartCursor";

export default function Home() {
  const [isLetter, setIsLetter] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black bg-white cursor-none">
        <HeartCursor/>
      {!isLetter ? (
        
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <HappyBirthday />
          <button
            onClick={() => setIsLetter(true)}
            className="flex items-center justify-center gap-3 p-4 rounded-lg text-white font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-[length:200%_auto] animate-pulse transition-all duration-300 hover:scale-110 hover:bg-[right_center] cursor-none"
            aria-label="Abre la carta amor"
          >
            <p className="text-md font-bold "> ABRE tu cartita AMOR</p>
            <LuMessageCircleHeart size={24} />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="text-center max-w-xl pt-10 px-4 pb-5 animate-fade-in text-2xl md:text-3xl font-light tracking-wide">
            <TextSlice
              text={[
                "Pensaste que lo iba olvidar?",
                "Hay pocas cosas que NO me gustan olvidar",
                "Sin duda, serás siempre una de ellas ❤️",
                "Amor... ¡Hoy! quiero desearte",
                "una BONITA mañana 🌼",
                "un HERMOSO día ☀️",
                "una VELADA increíble 💗",
                "Porque hoy...",
                "Hoy...👀",
                "Nació hace 25 años 👩🏻‍🍼...",
                "Una PRINCESA 👑",
                "Y eso fue lo mejor que paso aquel día 🌹",
                "Te quiero Mucho Mi AMOR 🥰",
                "Feliz cumpleeeee 🥳🎂🥹",
                "TE QUIERO MUCHOOO 💘",
                "ATENTAMENTE...",
                "Alexis Serrato ✍🏽"
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
          <div className="min-w-screen">
            <Frames />
          </div>
        </div>
      )}
    </div>
  );
}
