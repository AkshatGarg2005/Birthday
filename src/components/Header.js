import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Row className="mb-5 fadeIn">
      <Col>
        <h1 className="display-3 pacifico-font birthday-heading">
          Happy Birthday!
        </h1>
        <h2 className="display-4 pacifico-font text-primary mb-4" style={{ animationDelay: '0.3s' }}>
          Harshita Sharma
        </h2>
      </Col>
    </Row>
  );
}

export default Header;