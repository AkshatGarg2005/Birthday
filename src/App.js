import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BirthdayCard from './components/BirthdayCard';
import BirthdayMessage from './components/BirthdayMessage';
import Footer from './components/Footer';
import Confetti from './components/Confetti';
import Decorations from './components/Decorations';
import CountdownTimer from './components/CountdownTimer';
import { Container } from 'react-bootstrap';

function App() {
  // Check if it should be unlocked based on:
  // 1. If the current time is past midnight
  // 2. If it was previously unlocked (stored in localStorage)
  const checkIfUnlocked = () => {
    // Check if it was previously unlocked
    const wasUnlocked = localStorage.getItem('birthdayUnlocked') === 'true';
    
    // Check if current time is past midnight tonight
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const isPastMidnight = now >= midnight;
    
    // For testing: Uncomment to force unlocked state
    // return true;
    
    return wasUnlocked || isPastMidnight;
  };
  
  const [isUnlocked, setIsUnlocked] = useState(checkIfUnlocked());
  
  // Function to handle unlocking when countdown completes
  const handleUnlock = () => {
    // Set the unlock flag in localStorage to ensure it stays unlocked
    localStorage.setItem('birthdayUnlocked', 'true');
    setIsUnlocked(true);
  };

  return (
    <div className="App">
      {isUnlocked ? (
        <>
          <Confetti />
          <Decorations />
          <Container className="py-5">
            <Header />
            <BirthdayCard />
            <BirthdayMessage />
            <Footer />
          </Container>
        </>
      ) : (
        <CountdownTimer onUnlock={handleUnlock} />
      )}
    </div>
  );
}

export default App;