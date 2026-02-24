import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMOJIS = ['🔥', '🚀', '✨', '💻', '🎨', '⚡', '🤖', '⭐'];

interface TrailEmoji {
    id: number;
    x: number;
    y: number;
    emoji: string;
}

export const FunnyCursor = () => {
    const [trails, setTrails] = useState<TrailEmoji[]>([]);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let idCounter = 0;

        // Hide default cursor globally
        document.body.style.cursor = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsHovering(
                !!target.closest('button') ||
                !!target.closest('a') ||
                target.style.cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );

            const newTrail = {
                id: idCounter++,
                x: e.clientX,
                y: e.clientY,
                emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            };

            setTrails((prev) => [...prev.slice(-15), newTrail]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Custom Interactive Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#B3CB3C] z-[10000] mix-blend-difference"
                animate={{
                    x: mousePos.x - 16,
                    y: mousePos.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(179, 203, 60, 0.3)' : 'transparent',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
            />

            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#F25912] z-[10000]"
                animate={{
                    x: mousePos.x - 4,
                    y: mousePos.y - 4,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
            />

            <AnimatePresence>
                {trails.map((trail) => (
                    <motion.div
                        key={trail.id}
                        initial={{ opacity: 1, scale: 0.5, x: trail.x - 12, y: trail.y - 12 }}
                        animate={{
                            opacity: 0,
                            scale: 2,
                            y: trail.y - 150,
                            x: trail.x + (Math.random() - 0.5) * 100
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute text-2xl select-none"
                        style={{ left: 0, top: 0 }}
                    >
                        {trail.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
