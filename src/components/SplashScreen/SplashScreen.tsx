import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Funnies from 'funnies';
import "./SplashScreen.css";

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const funnies = useMemo(() => new Funnies(), []);
    const [text, setText] = useState("");
    const [funnyMessage] = useState(funnies.message());
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
                // Delay before completing to let user read the funny message
                setTimeout(() => {
                    onComplete();
                }, 2000);
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
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="splash-funny-message"
                >
                    {funnyMessage}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
