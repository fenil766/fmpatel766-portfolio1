import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SplashScreen.css";

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Portfolio";
    const typingSpeed = 100; // ms per character

    useEffect(() => {
        let currentIdx = 0;
        const interval = setInterval(() => {
            if (currentIdx <= fullText.length) {
                setText(fullText.slice(0, currentIdx));
                currentIdx++;
            } else {
                clearInterval(interval);
                // Delay before completing
                setTimeout(() => {
                    onComplete();
                }, 300);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="splash-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="splash-glow-green" />
            <div className="splash-glow-orange" />

            <div className="splash-title-wrapper">
                <h1 className="splash-title">
                    {text}
                    <span className="typewriter-cursor" />
                </h1>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
