import { connect } from 'react-redux';
import { loadPhotosRequest } from './redux/photosRedux';
import App from './App';

const mapDispatchToProps = dispatch => ({
  loadPhotos: () => dispatch(loadPhotosRequest()),
});

export default connect(null, mapDispatchToProps)(App);
