import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; // Import the styles // Add Header import
import Contacts from './components/Contacts';
import AnimatedBackground from './components/AnimatedBackground'
import About from './components/About'

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

const Home = () => {
  return (
    <Container>
      <About />
      <AnimatedBackground />
      <Contacts />
    </Container>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
