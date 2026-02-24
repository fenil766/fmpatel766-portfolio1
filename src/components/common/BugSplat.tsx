import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BugSplat = () => {
    const [bugs, setBugs] = useState<{ id: number; x: number; y: number }[]>([]);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);

    const startGame = () => {
        setIsPlaying(true);
        setScore(0);
        setTimeLeft(10);
        setBugs([]);
    };

    useEffect(() => {
        if (!isPlaying) return;

        if (timeLeft === 0) {
            setIsPlaying(false);
            alert(`🎉 Great job! You squashed ${score} bugs!`);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        const bugSpawner = setInterval(() => {
            const newBug = {
                id: Date.now(),
                x: Math.random() * 80 + 10, // 10% to 90%
                y: Math.random() * 80 + 10,
            };
            setBugs((prev) => [...prev, newBug]);

            // Remove bug after 2 seconds if not clicked
            setTimeout(() => {
                setBugs((prev) => prev.filter(b => b.id !== newBug.id));
            }, 2000);
        }, 800);

        return () => {
            clearInterval(timer);
            clearInterval(bugSpawner);
        };
    }, [isPlaying, timeLeft, score]);

    const squashBug = (id: number) => {
        setBugs((prev) => prev.filter(bug => bug.id !== id));
        setScore((prev) => prev + 1);
    };

    return (
        <div className="relative">
            {!isPlaying ? (
                <motion.button
                    onClick={startGame}
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full sm:w-auto bg-[#F25912] hover:bg-black text-white hover:text-[#F25912] border! border-[#F25912] px-10! py-4! rounded-none font-bold text-base md:text-lg tracking-wide transition-all duration-500 hover:[text-shadow:0_0_20px_#F25912] cursor-pointer"
                >
                    START BUG HUNT 🪲
                </motion.button>
            ) : (
                <div className="fixed inset-0 z-[10001] bg-black/90 flex flex-col items-center justify-center">
                    <div className="absolute top-10 left-10 text-[#B3CB3C] text-2xl font-bold">
                        BUGS SQUASHED: {score}
                    </div>
                    <div className="absolute top-10 right-10 text-[#F25912] text-2xl font-bold">
                        TIME LEFT: {timeLeft}s
                    </div>

                    <div className="relative w-full h-full cursor-crosshair overflow-hidden">
                        <AnimatePresence>
                            {bugs.map((bug) => (
                                <motion.div
                                    key={bug.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute text-4xl select-none p-4"
                                    style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                                    onMouseDown={() => squashBug(bug.id)}
                                >
                                    🪲
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => setIsPlaying(false)}
                        className="absolute bottom-10 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors"
                    >
                        QUIT GAME
                    </button>
                </div>
            )}
        </div>
    );
};
