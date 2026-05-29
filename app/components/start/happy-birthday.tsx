'use client'
import SplitText from "@/app/utils/SplitText"

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
}

export default function HappyBirthday() {
    return (
        <>
            <SplitText
                text="¡Feliz Cumpleaños!"
                className="text-3xl md:text-9xl font-semibold text-center text-black"
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
            <SplitText
                text="👑 Princesa 👑"
                className="text-3xl md:text-9xl font-semibold text-center text-pink-500"
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
        </>
    )
}