import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ecosystem from './components/Ecosystem.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Protocol from './components/Protocol.jsx';
import Mission from './components/Mission.jsx';
import FAQ from './components/FAQ.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Ecosystem />
        <HowItWorks />
        <Protocol />
        <Mission />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
