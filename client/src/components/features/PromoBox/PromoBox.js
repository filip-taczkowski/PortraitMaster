import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container } from 'reactstrap';

import './PromoBox.scss';

const PromoBox = () => (
  <Container>
    <section className="promo-box animated fadeInLeft">
      <Row>
        <Col xs="12" xl="6" className="order-2 order-xl-1">
          <h2>Showcase your talent in the biggest online contest!</h2>
          <span className="text-muted">Submit your entry until 20 may</span>
          <p className="mt-3">Join our community and submit your portraits. Your work will be judged by acclaimed photographers from all around the world.</p>
          <p>Showcase yourself and win enormous prizes!</p>
          <Link to="/submit">
            <Button color="primary" size="lg" className="btn-pill">Submit your work!</Button>
          </Link>  
        </Col>
        <Col xs="12" xl="6" className="order-1 order-xl-2">
          <div className="promo-box__photos d-flex justify-content-center">
            <img src="/img/promo/photo-1.jpg" alt="showcase" />
            <img src="/img/promo/photo-2.jpg" className="d-none d-md-block" alt="showcase" />
          </div>
        </Col>
      </Row>
    </section>
  </Container>
);

export default PromoBox;
