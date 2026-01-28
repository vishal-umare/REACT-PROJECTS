import { useState } from 'react'
import Navbar from "./components/Navbar"
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products />
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
