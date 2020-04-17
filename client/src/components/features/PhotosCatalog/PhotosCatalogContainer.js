import { connect } from 'react-redux';
import { getPhotos } from '../../../redux/photosRedux';
import PhotosCatalog from './PhotosCatalog';

const mapStateToProps = state => ({
  photos: getPhotos(state),
});

export default connect(mapStateToProps)(PhotosCatalog);
