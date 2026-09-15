import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App(){
    return(
        <div>
            <h1>
                <Navbar />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </h1>
        </div>
    );
}

export default App;