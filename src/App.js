// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Styles
import "./styles/app.scss";
// Import Util
import data from "./util";

import { useState } from "react";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />

      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
