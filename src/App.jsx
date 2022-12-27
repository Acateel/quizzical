import React from "react"
import Intro from "./components/Intro"
import Quizzical from "./components/Quizzical"

function App() {
  const [showIntro, setShowIntro] = React.useState(true)
  return (
    <div className="App">
      {
        showIntro ? 
        <Intro handleClick={setShowIntro} /> : 
        <Quizzical />
      }
    </div>
  )
}

export default App
