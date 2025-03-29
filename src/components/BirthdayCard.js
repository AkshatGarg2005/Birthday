import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function BirthdayCake() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="cake-image">
      {/* Cake base */}
      <path fill="#FFB7C5" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80z"/>
      
      {/* Cake frosting */}
      <path fill="#FFFFFF" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-16c28.02 0 31.26-32 74.5-32 43.43 0 46.825 32 74.75 32 27.695 0 31.454-32 74.75-32 42.842 0 47.218 32 74.5 32 28.148 0 31.202-32 74.75-32 43.547 0 46.653 32 74.75 32v16z"/>
      
      {/* Cake bottom layer */}
      <path fill="#F9C7E0" d="M448 512H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96z"/>
      
      {/* Frosting decorations */}
      <ellipse cx="74.75" cy="416" rx="12" ry="8" fill="#FFFFFF"/>
      <ellipse cx="224" cy="416" rx="12" ry="8" fill="#FFFFFF"/>
      <ellipse cx="373.25" cy="416" rx="12" ry="8" fill="#FFFFFF"/>
      <ellipse cx="149.5" cy="448" rx="12" ry="8" fill="#FFFFFF"/>
      <ellipse cx="298.5" cy="448" rx="12" ry="8" fill="#FFFFFF"/>
      
      {/* Candle 1 */}
      <rect x="96" y="60" width="12" height="52" fill="#7FFFD4" rx="2"/>
      {/* Flame 1 */}
      <path d="M102 45 C110 25, 90 25, 102 45" fill="#FFD700" className="flame"/>
      <ellipse cx="102" cy="40" rx="4" ry="6" fill="#FF6347" className="flame"/>
      
      {/* Candle 2 */}
      <rect x="224" y="60" width="12" height="52" fill="#FF7F7F" rx="2"/>
      {/* Flame 2 */}
      <path d="M230 45 C238 25, 218 25, 230 45" fill="#FFD700" className="flame"/>
      <ellipse cx="230" cy="40" rx="4" ry="6" fill="#FF6347" className="flame"/>
      
      {/* Candle 3 */}
      <rect x="352" y="60" width="12" height="52" fill="#7F7FFF" rx="2"/>
      {/* Flame 3 */}
      <path d="M358 45 C366 25, 346 25, 358 45" fill="#FFD700" className="flame"/>
      <ellipse cx="358" cy="40" rx="4" ry="6" fill="#FF6347" className="flame"/>
      
      {/* Sprinkles */}
      <circle cx="90" cy="360" r="3" fill="#FF6B6B"/>
      <circle cx="120" cy="370" r="3" fill="#4ECDC4"/>
      <circle cx="150" cy="355" r="3" fill="#FFD700"/>
      <circle cx="180" cy="365" r="3" fill="#A29BFE"/>
      <circle cx="210" cy="360" r="3" fill="#FF6B6B"/>
      <circle cx="240" cy="370" r="3" fill="#4ECDC4"/>
      <circle cx="270" cy="355" r="3" fill="#FFD700"/>
      <circle cx="300" cy="365" r="3" fill="#A29BFE"/>
      <circle cx="330" cy="360" r="3" fill="#FF6B6B"/>
      <circle cx="360" cy="370" r="3" fill="#4ECDC4"/>
    </svg>
  );
}

function BirthdayCard() {
  return (
    <Row className="justify-content-center mb-5">
      <Col xs={12} md={8} lg={6}>
        <Card className="birthday-card fadeIn delay-3">
          <div className="cake-container">
            <BirthdayCake />
          </div>
          <Card.Body className="card-content">
            <Card.Title className="pacifico-font fs-1 mb-4">
              Wishing You Joy & Happiness, Harshita!
            </Card.Title>
            <Card.Text className="message-text">
              May your day be filled with <span className="highlight-text">laughter</span>, joy, and wonderful memories.
              Cheers to another amazing year of your life!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BirthdayCard;