import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Row className="mt-5 fadeIn" style={{ animationDelay: '1.5s' }}>
      <Col>
        <p className="text-muted">
          With best wishes for Harshita Sharma
        </p>
      </Col>
    </Row>
  );
}

export default Footer;