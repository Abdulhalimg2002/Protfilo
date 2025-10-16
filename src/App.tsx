

import './App.css'
import Navbar from './components/Navbar'
import { Navlink } from './data'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './Footer'


function App() {


  return (
<>
  <Navbar Navbarlinks={Navlink}/>
  <main className="pt-16 bg-black dark:bg-black">
    <section  id='Home'><Home/></section>
    <section id='About'><About/> </section>
    <section id='Project'><Projects/> </section>
    <section id='Contact'><Contact/></section>
    <Footer/>

  </main>
  </>  


  )
}

export default App
