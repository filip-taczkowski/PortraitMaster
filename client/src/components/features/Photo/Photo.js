import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { FaRegHeart, FaSearch } from 'react-icons/fa'

import { IMAGES_URL } from '../../../config';

import './Photo.scss';

const Photo = ({ votePhoto, _id, src, title, author, votes}) => {
  
  const isVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || [];
    return (votes && votes.indexOf(id) !== -1);
  }

  return (
    <article className="photo animated fadeIn">
      <img src={`${IMAGES_URL}/${src}`} alt={title}  />
      <div className="photo__votes-box">
        {votes} <FaRegHeart className="photo__votes-box__icon" />
      </div>
      <div className="photo__actions d-flex justify-content-center align-items-center">
        <Link to={`/photo/${_id}`}><Button color="primary"><FaSearch /></Button></Link>
        {(!isVoted(_id)) && <Button color="danger" onClick={() => votePhoto(_id)}><FaRegHeart /></Button> }
      </div>
      <div className="photo__info">
        <h2 className="title-small">{ title } </h2>
        <span className="text-muted"><small>by {author}</small></span>
      </div>
    </article>
  );
}

Photo.propTypes = {
  _id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}

export default Photo;