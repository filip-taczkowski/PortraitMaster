import React from 'react';
import { PropTypes } from 'prop-types';
import { IMAGES_URL } from '../../../config';

import { Spinner, Button } from 'reactstrap';
import { FaRegHeart } from 'react-icons/fa'

import './PhotoPreview.scss';

const PhotoPreview = ({ photo, request, votePhoto }) => {

  const isVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || [];
    return (votes && votes.indexOf(id) !== -1);
  }

  if(!request || !request.success) return <Spinner color="primary" className="standard-box d-block mr-auto ml-auto" /> 
  else {
    const { title, author, src, votes, _id } = photo;

    return (
      <section className="text-center animated fadeIn">
        <h1 className="mb-2">{ title }</h1>
        <span className="d-block text-muted mb-3">By { author }</span>
        <img className="photo-preview" src={`${IMAGES_URL}/${src}`} alt={title}  />
        <span className="d-block text-muted mb-3">{ votes } votes</span>
        { (!isVoted(_id)) && <Button onClick={() => { votePhoto(_id) }} color="danger" size="lg" className="btn-pill"><FaRegHeart /> Show your love</Button> }
      </section>
    );
  }
}

PhotoPreview.propTypes = {
  photo: PropTypes.object
}

export default PhotoPreview;