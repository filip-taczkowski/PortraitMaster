import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from 'reactstrap';

import Photos from '../Photos/PhotosContainer';

import './TrendingPhotos.scss';

const TrendingPhotos = ({ photos }) => (
  <section className="trending-box">
    <Container>
      <h2 className="pt-5">Trending photos</h2>
      <Photos data={photos} />
    </Container>
  </section>
);

TrendingPhotos.propTypes = {
  photos: PropTypes.array,
}

export default TrendingPhotos;