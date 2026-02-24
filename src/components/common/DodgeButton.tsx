import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const DodgeButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicks, setClicks] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleHover = () => {
        if (clicks >= 5) return;

        const nextClicks = clicks + 1;
        setClicks(nextClicks);

        if (nextClicks >= 5) {
            // Reset to original position when game is won/done
            setPosition({ x: 0, y: 0 });
        } else {
            // Move to random position
            const newX = (Math.random() - 0.5) * 300;
            const newY = (Math.random() - 0.5) * 200;
            setPosition({ x: newX, y: newY });
        }
    };

    const getButtonText = () => {
        if (clicks === 0) return "CLICK IF YOU CAN";
        if (clicks === 1) return "OUPSS! MISSED";
        if (clicks === 2) return "TOO SLOW!";
        if (clicks === 3) return "ARE YOU EVEN TRYING?";
        if (clicks === 4) return "ALMOST THERE...";
        return "OKAY, YOU WIN! CLICK ME";
    };

    return (
        <div ref={containerRef} className="relative flex justify-center items-center py-10">
            <motion.button
                animate={{ x: position.x, y: position.y }}
                onMouseEnter={handleHover}
                onClick={() => {
                    if (clicks >= 5) {
                        alert("Congrats! You have amazing patience. Here's a virtual high-five! 🖐️");
                        // Reset to initial state
                        setClicks(0);
                        setPosition({ x: 0, y: 0 });
                    }
                }}
                className={`px-8 py-3 rounded-full font-bold transition-colors shadow-lg
          ${clicks >= 5 ? 'bg-green-500 hover:bg-green-600' : 'bg-[#B3CB3C] text-black'}
        `}
            >
                {getButtonText()}
            </motion.button>
        </div>
    );
};
