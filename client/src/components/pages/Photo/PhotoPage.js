import React from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import PhotoPreview from '../../features/PhotoPreview/PhotoPreviewContainer';

const SubmitPage = ({ match }) => (
  <Container>
    <PhotoPreview id={match.params.id} />
  </Container>
);

export default withRouter(SubmitPage);
