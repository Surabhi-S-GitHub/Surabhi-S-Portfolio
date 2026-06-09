import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { data } from './data/portfolioData';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero data={data} />
      <About data={data} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Certifications certs={data.certifications} />
      <Contact data={data} />
    </>
  );
}
