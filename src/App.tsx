import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero';
import About from './components/About';


function App() {

  return (
<main className="bg-white w-full">
    <Hero />
    <About />
</main>
  )
}

export default App
