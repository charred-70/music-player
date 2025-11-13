import { useState } from 'react'
import './App.css'
import PlayButton from './Components/PlayButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Type a song with Name + Artist</h2>
      <input/>
      <input/>
      <PlayButton/>
    </>
  )
}

export default App
ß