import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Row className="mt-5 fadeIn delay-5">
      <Col>
        <p className="text-muted">
          With best wishes for Harshita Sharma
        </p>
        <p className="small text-muted">
          Handcrafted with ❤️
        </p>
      </Col>
    </Row>
  );
}

export default Footer;