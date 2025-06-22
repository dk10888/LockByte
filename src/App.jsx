import { useState } from 'react'
import Navbar from './componenets/Navbar'
import Manager from './componenets/Manager'
import Footer from '../footer'

function App() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Manager />
      </main>
      <Footer />
    </div>
  )
}

export default App
