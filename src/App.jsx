import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Results from './components/Results.jsx';
import Courses from './components/Courses.jsx';
import MockTest from './components/MockTest.jsx';
import Books from './components/Books.jsx';
import Registration from './components/Registration.jsx';
import HowToJoin from './components/HowToJoin.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-canvas focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Results />
        <Courses />
        <MockTest />
        <Books />
        <Registration />
        <HowToJoin />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
