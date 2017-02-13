import {connect} from 'react-redux';
import Stations from '../components/Stations'
import {convertSongsToStations} from '../utils'


const mapStateToProps = (state) => (
  {
  stations: convertSongsToStations(state.songs)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stations);

