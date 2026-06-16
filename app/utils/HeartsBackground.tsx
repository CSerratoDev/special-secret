import { BsFillArrowThroughHeartFill } from "react-icons/bs";

export default function HeartsBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, index) => (
                <span
                    key={index}
                    className="heart-icon"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 7}s`,
                        animationDuration: `${6 + Math.random() * 4}s`,
                    }}
                >
                    <BsFillArrowThroughHeartFill className="text-pink-600" size={40} />
                </span>
            ))}
        </div>
    );
}