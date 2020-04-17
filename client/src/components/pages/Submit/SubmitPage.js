import React from 'react';
import { Container } from 'reactstrap';

import SubmitPhotoForm from '../../features/SubmitPhotoForm/SubmitPhotoFormContainer';

const SubmitPage = () => (
  <Container>
    <h1>Submit a photo</h1>
    <p>Are you interested in participating in our contest? We are glad to hear that!</p>
    <SubmitPhotoForm />
  </Container>
);

export default SubmitPage;
