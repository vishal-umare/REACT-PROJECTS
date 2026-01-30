import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
    </div>
  )
}

export default App
