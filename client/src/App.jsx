import './css/variables.css';
import './css/base.css';
import './css/components.css';
import './css/sections.css';
import './css/animations.css';
import './css/responsive.css';

import { useScrollRevealGroup } from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import WhyChoose from './components/WhyChoose';
import ClientResults from './components/ClientResults';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize scroll reveal for all .reveal elements
  useScrollRevealGroup('.reveal');
  useScrollRevealGroup('.reveal-left');
  useScrollRevealGroup('.reveal-right');
  useScrollRevealGroup('.reveal-scale');

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <WhyChoose />
        <ClientResults />
        <Portfolio />
        <Process />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

