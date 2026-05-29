'use client'
import TextSlice from '@/app/utils/TextSlice'


export default function MyLove() {
    return (
        <>
            <div>
                <TextSlice
                    text={["Text typing effect", "for your websites", "Happy coding!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={40}
                    cursorBlinkDuration={0.6}
                    variableSpeed={{ min: 50, max: 150 }}
                />
            </div>
        </>
    )
}