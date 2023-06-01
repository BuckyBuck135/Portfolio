import './App.css'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {

   return (
    <div className="app">
      <Header />
      <Aside />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )

}
