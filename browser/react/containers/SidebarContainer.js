
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = state => (
  {
    playlists: state.list
  }
);

export default connect(mapStateToProps)(Sidebar);