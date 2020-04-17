import { connect } from 'react-redux';
import { ADD_PHOTO, addPhotoRequest, getRequest } from '../../../redux/photosRedux';
import SubmitPhotoForm from './SubmitPhotoForm';

const mapStateToProps = state => ({
  request: getRequest(state, ADD_PHOTO),
});

const mapDispatchToProps = dispatch => ({
  addPhoto: data => dispatch(addPhotoRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPhotoForm);
