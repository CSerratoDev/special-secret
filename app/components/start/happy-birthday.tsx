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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <div className="text-3xl md:text-7xl">👑</div>
                <SplitText
                    text="Princesa <3"
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
                <div className="text-3xl md:text-7xl">👑</div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-3xl md:text-7xl">🎉</div>
                <h1 className="font-bold text-pink-500 text-3xl md:text-7xl">25 años</h1>
                <div className="text-3xl md:text-7xl">🥳</div>
            </div>
        </>
    )
}