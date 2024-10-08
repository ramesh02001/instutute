
import './App.css';
import About from './Components/About';
import Campous from './Components/Campous';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Program from './Components/Program';
import Testimonials from './Components/Testimonials';
import Title from './Components/Title';
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import { useState } from 'react';

function App() {
  const [playstate,setplaystate]=useState(false);

  return (
    <div >
    
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subtitle='Our PROGRAM' Title='What We Offer'/>
      <Program/>
      <About setplaystate={setplaystate}/>
      <Title subtitle='Gallery' Title='Campus Photo'/>
      <Campous/>
      <Title subtitle='TESTIMONIALS' Title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='CONTACT US' Title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  );
}

export default App;



