"use client";

import { useEffect, useState } from "react";
import { LuHeart } from "react-icons/lu";

export default function HeartCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicked ? 0.8 : 1})`,
      }}
    >
      <LuHeart 
        size={24} 
        className="text-red-500 fill-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" 
      />
    </div>
  );
}