import './App.css'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
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
        <Projects />
        <Contact />
        <Footer />
    </div>
  )

}
