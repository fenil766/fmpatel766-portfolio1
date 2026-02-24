import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ClientsSection from './sections/ClientsSection';
import WorksSection from './sections/WorksSection';
import ServicesSection from './sections/ServicesSection';
import ExperienceSection from './sections/ExperienceSection';
import AboutSection from './sections/AboutSection';
import AchievementsSection from './sections/AchievementsSection';
import EducationSection from './sections/EducationSection';
import CTASection from './sections/CTASection';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import { FunnyCursor } from '../../components/common/FunnyCursor';
import { FindTheMonkey } from '../../components/common/FindTheMonkey';
import { useKonamiCode } from '../../helpers/useKonamiCode';

export default function Landing() {
  const [showSplash, setShowSplash] = useState(true);
  const [isPartyMode, setIsPartyMode] = useState(false);

  const triggerParty = useCallback(() => {
    setIsPartyMode(true);
    setTimeout(() => setIsPartyMode(false), 5000);
  }, []);

  useKonamiCode(triggerParty);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <FunnyCursor />
      <FindTheMonkey />

      {isPartyMode && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
        >
          <div className="bg-[#B3CB3C] text-black text-4xl md:text-6xl font-black p-10 rotate-12 shadow-[20px_20px_0px_#fff]">
            PARTY MODE ACTIVATED! 🥳
          </div>
        </motion.div>
      )}

      <motion.main
        className="bg-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showSplash ? 0 : 1,
          rotate: isPartyMode ? [0, 5, -5, 5, 0] : 0,
          scale: isPartyMode ? 0.9 : 1
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          rotate: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <Navbar />
        <HeroSection />
        <ClientsSection />
        <WorksSection />
        <ServicesSection />
        <ExperienceSection />
        <AboutSection />
        <AchievementsSection />
        <EducationSection />
        <CTASection />
        <Footer />
      </motion.main>
    </>
  );
}