import React from 'react';
import './App.css';
import Header from './components/Header';
import BirthdayCard from './components/BirthdayCard';
import BirthdayMessage from './components/BirthdayMessage';
import Footer from './components/Footer';
import Confetti from './components/Confetti';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Confetti />
      <Container className="py-5">
        <Header />
        <BirthdayCard />
        <BirthdayMessage />
        <Footer />
      </Container>
    </div>
  );
}

export default App;