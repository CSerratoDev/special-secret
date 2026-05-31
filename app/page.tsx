"use client"

import { useState, useRef, useEffect } from "react";

import HappyBirthday from "./components/start/happy-birthday";
import TextSlice from "./utils/TextSlice";

import Frames from "./components/album/frames";
import { LuMessageCircleHeart } from "react-icons/lu";
import HeartCursor from "./utils/HeartCursor";
import { IoMusicalNoteOutline } from "react-icons/io5";

export default function Home() {
  const [isLetter, setIsLetter] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isLetter && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Error al reproducir el audio:", error);
      })
    }
  }, [isLetter]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black bg-white cursor-none">
      <HeartCursor />
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
          <div className="md:h-screen flex flex-col items-center justify-center text-center pt-10 px-4 pb-5 animate-fade-in text-2xl md:text-3xl font-light tracking-wide">
            <div className="mb-6 w-full max-w-md bg-pink-50 p-3 rounded-2xl shadow-sm border border-pink-100 z-10">
              <p className="flex justify-center items-center text-xs font-semibold text-pink-500 mb-2 animate-pulse">
                <IoMusicalNoteOutline size={24}/> Escucha esto mientras lees...
              </p>
              <audio
                ref={audioRef}
                src="/music/EdSheeran_Photograph.mp3"
                controls
                loop
                className="w-full h-9 accent-pink-500"
              />
            </div>
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
          <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
            <h1 className="text-lg font-normal m-0">Desliza abajo 👀</h1>
            <Frames />
          </div>
        </div>
      )}
    </div>
  );
}
