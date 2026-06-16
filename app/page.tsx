"use client"

import { useState, useRef, useEffect } from "react";
import HappyBirthday from "./components/start/happy-birthday";
import TextSlice from "./utils/TextSlice";
import Frames from "./components/album/frames";
import HeartCursor from "./utils/HeartCursor";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiGiftFill } from "react-icons/pi";
import { Card, CardFooter } from "@heroui/react";
import HeartsBackground from "./utils/HeartsBackground";

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
      <HeartsBackground />
      <HeartCursor />
      {!isLetter ? (
        <Card className="flex flex-col items-center gap-8 animate-fade-in">
          <HappyBirthday />
          <CardFooter className="p-1 md:p-2 flex justify-center items-center gap-2">
            <button
              onClick={() => setIsLetter(true)}
              className="button-special"
              aria-label="Abre la carta amor"
            >
              <p> ABREME </p>
                <PiGiftFill size={24} />
            </button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
          <div className="md:h-screen flex flex-col items-center justify-center text-center pt-10 px-4 animate-fade-in text-2xl md:text-3xl font-light tracking-wide bg-gray-800 pb-12">
            <div className="mb-6 w-full max-w-md bg-pink-50 p-3 rounded-2xl shadow-sm border border-pink-100 z-10">
              <p className="flex justify-center items-center text-xs font-semibold text-pink-500 mb-2 animate-pulse">
                <IoMusicalNoteOutline size={24}/> Escucha mientras lees...
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
                "Hay pocos dias que NO me gustan olvidar",
                "Tu día sera siempre uno de ellos ❤️",
                "Amor...🥰¡Hoy quiero desearte!",
                "muchaaaa SALUD 😇",
                "BIENESTAR en tu VIDAAA 🥺",
                "y que no te falte la FELICIDAD 💗",
                "Hoy...👀",
                "Hace 25 años...",
                "La tierra presencio el nacimiento",
                "De una Hermosa PRINCESA 👑",
                "Y eso fue lo MEJOR",
                "que sucedió aquel DÍA 🌹",
                "Estos recuerdos que ves en fotos...",
                "Aunque son pocos, relatan el inicio...",
                "De nuestra Historia de Amor 🥰",
                "Nunca dudes de tu belleza 🤗",
                "yo te aseguro...",
                "que nunca te dejare sola 💗",
                "permiteme tomarte de la mano y abrazarte",
                "recuesta tu cabeza en mi pecho y...",
                "se testigo de como,",
                "mi corazon late por ti 💗",
                "confia en mi",
                "como yo confio en ti",
                "juntos seremos felices",
                "Feliz cumpleeeee 🥳🎂🥹",
                "Te quiero Mucho MI VIDA 🥰",
                "Atentamente...",
                "El amor de tu vida 🫣...",
                "Alexis Serrato 💘"
              ]}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={40}
              cursorBlinkDuration={0.6}
              variableSpeed={{ min: 50, max: 150 }}
              className="md:block md:text-2xl text-sm absolute z-10 top-40 md:z-0 md:top-1/3 text-white"
            />
          </div>
          <div className="h-screen flex flex-col justify-center items-center md:bg-gray-200">
            <Frames />
          </div>
        </div>
      )}
    </div>
  );
}
