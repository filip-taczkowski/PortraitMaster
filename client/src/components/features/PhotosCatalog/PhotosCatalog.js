import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from 'reactstrap';

import Photos from '../Photos/PhotosContainer';

import './PhotosCatalog.scss';

const PhotosCatalog = ({ photos }) => (
  <section className="photos-catalog">
    <Container>
      <h2 className="pt-5">Browse photos</h2>
      <Photos data={photos} />
    </Container>
  </section>
);

PhotosCatalog.propTypes = {
  photos: PropTypes.array,
}

export default PhotosCatalog ;