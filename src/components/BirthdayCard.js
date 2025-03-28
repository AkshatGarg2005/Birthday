import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function BirthdayCake() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="cake-image">
      {/* Birthday Cake with Candles */}
      <path fill="#ff9f7f" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96z"/>
      {/* Candle 1 */}
      <rect x="96" y="60" width="12" height="52" fill="#7fffd4"/>
      {/* Flame 1 */}
      <path d="M102 45 C110 25, 90 25, 102 45" fill="#ffdb58" className="flame"/>
      {/* Candle 2 */}
      <rect x="224" y="60" width="12" height="52" fill="#ff7f7f"/>
      {/* Flame 2 */}
      <path d="M230 45 C238 25, 218 25, 230 45" fill="#ffdb58" className="flame"/>
      {/* Candle 3 */}
      <rect x="352" y="60" width="12" height="52" fill="#7f7fff"/>
      {/* Flame 3 */}
      <path d="M358 45 C366 25, 346 25, 358 45" fill="#ffdb58" className="flame"/>
    </svg>
  );
}

function BirthdayCard() {
  return (
    <Row className="justify-content-center mb-5">
      <Col xs={12} md={8} lg={6}>
        <Card className="birthday-card fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="text-center p-4 bg-light">
            <BirthdayCake />
          </div>
          <Card.Body className="py-4">
            <Card.Title className="pacifico-font fs-1 mb-4">
              Wishing You Joy & Happiness, Harshita!
            </Card.Title>
            <Card.Text className="message-text">
              May your day be filled with laughter,and wonderful memories.
              Cheers to another amazing year of your life!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BirthdayCard;