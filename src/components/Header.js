import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Row className="mb-5 text-center">
      <Col>
        <div className="mb-3">
          <h1 style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "5rem",
            color: "#ff6b6b",
            marginBottom: "1rem",
            textShadow: "3px 3px 0px rgba(0,0,0,0.1)"
          }}>
            Happy Birthday!
          </h1>
        </div>
        <h2 className="display-4 pacifico-font text-primary mb-4">
          Harshita Sharma
        </h2>
      </Col>
    </Row>
  );
}

export default Header;