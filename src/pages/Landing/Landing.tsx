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

export default function Landing() {
  return (
    <main className="bg-black text-white overflow-hidden">
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
    </main>
  );
}