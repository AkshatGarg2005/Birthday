import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function BirthdayMessage() {
  return (
    <Row className="justify-content-center mb-5">
      <Col xs={12} md={10} lg={8}>
        <Card 
          className="border-0 shadow-soft birthday-card fadeIn delay-4 bg-card"
        >
          <Card.Body className="p-4 p-md-5">
            <p className="lead message-text">
              Happy Birthday 🎂
            </p>
            <p className="message-text">
              On this special day, I want to wish you all the happiness in the world. May your day be as bright and beautiful as your smile.
            </p>
            <p className="message-text">
              Hopefully we get selected in hackathon this year 😅
            </p>
            <p className="message-text pacifico-font fs-2 text-primary mt-4">
              Enjoy your day 🥳
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BirthdayMessage;