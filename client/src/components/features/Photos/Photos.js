import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col, Spinner } from 'reactstrap';

import Photo from '../Photo/Photo';

const Photos = ({ data, votePhoto, request }) => {
  
  if(!request || !request.success) return <Spinner color="primary" className="standard-box d-block mr-auto ml-auto" /> 
  else return (
    <section className="">
      <Row>
        {data.map(photo => <Col key={photo._id} xs="12" md="6" lg="3"><Photo {...photo} votePhoto={votePhoto} /></Col> )}
      </Row>
    </section>
  );

};

Photos.propTypes = {
  data: PropTypes.array,
}

export default Photos;