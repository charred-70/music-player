import { useState, useEffect } from 'react'
import './App.css'
import PlayButton from './Components/PlayButton'
import { createClient } from './utils/client.js'
import SkipButton from './Components/SkipButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import PreviousButton from './Components/PreviousButton'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import FileInput from './Components/FileInput.jsx'


function App() {
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [profile, setProfile] = useState(null);



  const supabase = createClient();

  async function getSongs() {
    const { data } = await supabase.from("songs").select();
    setSongs(data);
  }

  useEffect(() => {
    getSongs();
  }, []);

  async function addSong(event) {
    event.preventDefault();
    const { data, error } = await supabase.from('songs').insert([{ title: title, artist: artist }]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }

  /**upload song -> learn to use storage api
   * learn to use supabase auth for user accounts
   * create a form for users to upload music
   * validate that it's a valid music file, upload to supabase (with some way of linking it to the original uploader)
   * display metadataa of the song in the actual player. 
   * 
   * separate table to store metadata -> displaying songs on the side
   * 
   * user uploads file
   *    upload to supabase storage
   *      gives url
   *      store file in sql table
   * 
   * mp3 files have metadata: song title, artist, album cover
   * 
   * make api endpoint for files 
   * request form data -> auth, user, files 
   * add to storage
   * make audio url accessable
   * 
   */

  return (
    <>
      <div class='background'>
        <div class='list'>
          <div class='listMenu'>
            <h2>App Name</h2>
            {/* <button>
              <i class="fa-solid fa-play"></i>
              Add Song
            </button>
            <input type='text' onChange={(event) => setTitle(event.target.value)}></input>
            <input type='text' onChange={(event) => setArtist(event.target.value)}></input>
            <button type='submit' onClick={addSong}>Submit</button> */}
            <FileInput />
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
