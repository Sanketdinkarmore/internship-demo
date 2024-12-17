import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './component/homepage'
import Mobile from './component/mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="desktop">
     <Homepage/>
     </div>
     <div className="mobile">
      <Mobile/>
     </div>
    
        
    </>
  )
}

export default App
