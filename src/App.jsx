import './App.css'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'


export default function App() {

  return (
    <div className="app">
      <Header />
      <Aside />
      <div className="main">
        <Intro />
      </div>
      
    </div>
  )
}
