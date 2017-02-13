// Station.js
import React from 'react';
import Songs from './Songs';

export default (props) => {
  return (
    <div>
      <h3>{ props.genre } Station</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );
}
