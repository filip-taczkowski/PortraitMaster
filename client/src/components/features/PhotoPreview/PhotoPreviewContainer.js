import { connect } from 'react-redux';
import { LOAD_PHOTOS, getPhoto, getRequest, votePhotoRequest } from '../../../redux/photosRedux';
import PhotoPreview from './PhotoPreview'

const mapStateToProps = (state, ownProps) => ({
  photo: getPhoto(state, ownProps.id),
  request: getRequest(state, LOAD_PHOTOS),
});

const mapDispatchToProps = dispatch => ({
  votePhoto: id => dispatch(votePhotoRequest(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PhotoPreview);
