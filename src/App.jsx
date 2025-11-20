import { useState, useEffect } from 'react'
import './App.css'
import PlayButton from './Components/PlayButton'
import { createClient } from '@supabase/supabase-js'
import AddButton from './Components/AddButton'
import SkipButton from './Components/SkipButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import PreviousButton from './Components/PreviousButton'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



function App() {
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState([]);


  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

  useEffect(() => {
    getSongs();
  }, []);

  async function getSongs() {
    const { data } = await supabase.from("songs").select();
    setSongs(data);
  }

  /**upload song -> learn to use storage api
   * learn to use supabase auth for user accounts
   * create a form for users to upload music
   * validate that it's a valid music file, upload to supabase (with some way of linking it to the original uploader)
   * display metadataa of the song in the actual player. 
   * 
   * separate table to store metadata -> displaying songs on the side
   * 
   */

  return (
    <>
      <div class='background'>
        <div class='list'>
          <div class='listMenu'>
            <h2>App Name</h2>
            <AddButton />
          </div>
          <ul class='songsList'>
            {songs.map((song) => (
              <li key={song.title}>
                <p>{song.title}</p>
                <button></button>
              </li>
            ))}
          </ul>
        </div>
        <div class='player'>
          <div class='albumCover'></div>
          <p>placeholder name</p>
          <p>placeholder artist</p>


          <div class='options'>
            <PreviousButton />
            <PlayButton />
            <SkipButton />
          </div>

          <div class='timeSlider'>
            <div class='current-duration'>00:00</div>
            <input type='range' min='1' max='100' value='0' class='volume-sliding'></input>
            <div class='total-duration'>00:00</div>
          </div>

          <div class='volumeSlider'>
            <i></i>
            <input type='range' min='1' max='100' value='99'></input>
            <i></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
