'use client'
import SplitText from "@/app/utils/SplitText"
import { Card, CardContent, CardFooter, CardHeader } from "@heroui/react";
import { BsCake2 } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
}

export default function HappyBirthday() {
    return (
        <Card className="bg-zinc-50">
            <CardHeader className="flex justify-center items-center gap-2 md:pb-8">
                <Card.Title className="w-50 h-50">
                    <img
                        src="/photos/primer_dia.jpg"
                        alt="primer_dia"
                        className='w-full h-full md:w-50 md:h-50 object-cover object-center brightness-95 contrast-105'
                        loading="lazy"
                        draggable={false}
                    />
                </Card.Title>
                <Card.Description className="flex justify-center items-center gap-5">

                    <BsCake2 size={70} className="bg-transparent text-yellow-400 " />
                    <GiQueenCrown size={70} className="text-pink-500" />
                </Card.Description>
                <SplitText
                    text="¡¡FELIZ CUMPLEAÑOS AMOR!!"
                    className="text-xl md:text-4xl font-bold text-center text-pink-400"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center gap-2">
                    <SplitText
                        text="Este es un detallito para ti"
                        className="text-xl md:text-3xl font-semibold text-center text-blue-400"
                        delay={200}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <SplitText
                        text="Por el día tan especial"
                        className="text-xl md:text-3xl font-semibold text-center text-pink-400"
                        delay={200}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
            </CardContent>
        </Card>
    )
}