import { connect } from 'react-redux';
import { votePhotoRequest, getRequest, LOAD_PHOTOS } from '../../../redux/photosRedux';
import Photos from './Photos'

const mapStateToProps = state => ({
  request: getRequest(state, LOAD_PHOTOS),
});

const mapDispatchToProps = dispatch => ({
  votePhoto: id => dispatch(votePhotoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
