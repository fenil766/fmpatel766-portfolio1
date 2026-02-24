import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MONKEY_SVG = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="#B3CB3C" />
        <path d="M12 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" fill="#B3CB3C" />
        <path d="M15.5 15.5c-.3 0-.5-.2-.5-.5 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3-.2.5-.5.5z" fill="#B3CB3C" />
        <path d="M7 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="#000" />
    </svg>
);

export const FindTheMonkey = () => {
    const [isIdle, setIsIdle] = useState(false);
    const [monkeyPos, setMonkeyPos] = useState({ x: 0, y: 0 });
    const [found, setFound] = useState(false);

    useEffect(() => {
        let timeout: any;

        const startTimer = () => {
            timeout = setTimeout(() => {
                setIsIdle(true);
                setMonkeyPos({
                    x: Math.random() * (window.innerWidth - 100) + 50,
                    y: Math.random() * (window.innerHeight - 100) + 50,
                });
            }, 45000); // 45 seconds of inactivity
        };

        const handleActivity = () => {
            if (isIdle) {
                setIsIdle(false);
            }
            clearTimeout(timeout);
            startTimer();
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('mousedown', handleActivity);

        startTimer();

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('mousedown', handleActivity);
            clearTimeout(timeout);
        };
    }, [isIdle]);

    if (!isIdle || found) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed top-24 left-1/2 -translate-x-1/2 z-[10000] bg-[#B3CB3C] text-black px-6 py-3 rounded-full font-bold shadow-2xl"
            >
                🙈 PSST! You were idle... Can you find the hidden monkey?
            </motion.div>

            <motion.div
                style={{ left: monkeyPos.x, top: monkeyPos.y }}
                className="fixed z-[9999] cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 20 }}
                onClick={() => {
                    setFound(true);
                    alert("🙊 YOU FOUND ME! Back to work now! 🚀");
                    setIsIdle(false);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {MONKEY_SVG}
            </motion.div>
        </>
    );
};
