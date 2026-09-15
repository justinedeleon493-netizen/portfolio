import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <main className="text-gray-300 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default HomePage;