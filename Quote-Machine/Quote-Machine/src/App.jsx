import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quotes from "./Quotes"
import TextTransition, { presets } from 'react-text-transition';



function App() {

  return (
    <>

      <div class="body">
        <h1>Random Quote Generator</h1>
       <Quotes />
      </div>
    </>
  )
}

export default App
