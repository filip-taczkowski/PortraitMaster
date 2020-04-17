import { connect } from 'react-redux';
import { getTrendingPhotos } from '../../../redux/photosRedux';
import TrendingPhotos from './TrendingPhotos';

const mapStateToProps = state => ({
  photos: getTrendingPhotos(state),
});

export default connect(mapStateToProps)(TrendingPhotos);
