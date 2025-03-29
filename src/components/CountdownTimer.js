import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CountdownTimer({ onUnlock }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Calculate time until midnight tonight
    const calculateTimeUntilMidnight = () => {
      const now = new Date();
      
      // Set to midnight tonight (00:00:00)
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      let differenceInMs = midnight - now;
      
      // If it's already past midnight, show the content
      if (differenceInMs <= 0) {
        setIsUnlocked(true);
        if (onUnlock) onUnlock();
        return { hours: 0, minutes: 0, seconds: 0 };
      }
      
      // Calculate hours, minutes, seconds
      const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
      differenceInMs -= hours * (1000 * 60 * 60);
      
      const minutes = Math.floor(differenceInMs / (1000 * 60));
      differenceInMs -= minutes * (1000 * 60);
      
      const seconds = Math.floor(differenceInMs / 1000);
      
      return { hours, minutes, seconds };
    };

    // Check if we should already be unlocked (past midnight)
    if (new Date() >= new Date().setHours(24, 0, 0, 0)) {
      setIsUnlocked(true);
      if (onUnlock) onUnlock();
      return;
    }

    // Initial calculation
    setTimeLeft(calculateTimeUntilMidnight());
    
    // Set up interval to update the timer
    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeUntilMidnight();
      setTimeLeft(newTimeLeft);
      
      // If countdown is complete, clear the interval and unlock
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsUnlocked(true);
        if (onUnlock) onUnlock();
        clearInterval(timerId);
      }
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timerId);
  }, [onUnlock]);

  if (isUnlocked) {
    return null; // Don't render anything if unlocked
  }

  // Function to render a digit with animated flipping effect
  const TimerDigit = ({ value }) => {
    const paddedValue = String(value).padStart(2, '0');
    
    return (
      <div className="timer-digit">
        {paddedValue.split('').map((digit, index) => (
          <div key={index} className="digit-container">
            <div className="digit">{digit}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="countdown-container">
      <div className="countdown-overlay"></div>
      <Container className="countdown-content">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="countdown-title pacifico-font">
              Birthday Surprise
            </h1>
            <p className="countdown-subtitle">
              Unlocks at Midnight
            </p>
            
            <div className="timer-container">
              <div className="timer-block">
                <TimerDigit value={timeLeft.hours} />
                <span className="timer-label">Hours</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-block">
                <TimerDigit value={timeLeft.minutes} />
                <span className="timer-label">Minutes</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-block">
                <TimerDigit value={timeLeft.seconds} />
                <span className="timer-label">Seconds</span>
              </div>
            </div>

            <div className="countdown-message">
              <p>Coming Soon: Harshita's Special Birthday Surprise!</p>
              <div className="balloon-container">
                <div className="balloon balloon-1"></div>
                <div className="balloon balloon-2"></div>
                <div className="balloon balloon-3"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CountdownTimer;