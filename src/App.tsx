import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { OurTeam } from './components/sections/OurTeam';
import { AboutUs } from './components/sections/AboutUs';
import { TeachingExperience } from './components/sections/TeachingExperience';
import { ContactForm } from './components/sections/ContactForm';
import { References } from './components/sections/References';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <HowItWorks />
        <OurTeam />
        <TeachingExperience />
        <Testimonials />
        <CTA />
        <ContactForm />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App; 