import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function BirthdayMessage() {
  return (
    <Row className="justify-content-center mb-4">
      <Col xs={12} md={10} lg={8}>
        <Card 
          className="border-0 bg-transparent fadeIn" 
          style={{ animationDelay: '1s' }}
        >
          <Card.Body>
            <p className="lead message-text">
            Happy Birthday 🎂
            </p>
            <p className="lead message-text">
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