// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Styles
import "./styles/app.scss";
// Import Util
import data from "./util";

import {useState} from "react";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
