
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

AUDIO.addEventListener('ended', next);
AUDIO.addEventListener('timeupdate', () => {
  store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
});

const mapStateToProps = state => {
  console.log(state);
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

const mapDispatchToState = dispatch => {
  return {
    next,
    previous,
    toggle: (song, list) => dispatch(toggleSong(song, list))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Player);