import { useState } from 'react';
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

export default function Landing() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <motion.main
        className="bg-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
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