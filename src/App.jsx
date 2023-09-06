import { useState } from 'react'

import './App.css'
import RemindMe from './components/RemindMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p>Its Time! A stroll is good for your soul</p> */}
    <div className="remind">
    <RemindMe />

    </div>
    
     
    </>
  )
}

export default App
