import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Row className="mb-5">
      <Col>
        <h1 className="display-3 pacifico-font birthday-heading fadeIn delay-1">
          Happy Birthday!
        </h1>
        <h2 className="display-4 pacifico-font text-primary mb-4 fadeIn delay-2">
          Harshita Sharma
        </h2>
      </Col>
    </Row>
  );
}

export default Header;