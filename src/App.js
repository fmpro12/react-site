import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; // Import the styles // Add Header import
import NeuroLines from './components/NeuroLines'; // Add NeuroLines import

import PostList from './components/PostList';
import Gallery from './components/Gallery';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

const Home = () => {
  return (
    <Container>
      <div className="post-list">
        <div className="post">
          <h2>Welcome to My neurographic Site!</h2>
          {/* Add any additional content for the home page */}
        </div>
      </div>
      <PostList />
      <Gallery />
      {/* Add more sections/content for your one-page site */}
    </Container>
  );
};

function App() {
  return (
    <Router>
      <div className="animated-background"></div>
      <NeuroLines /> {/* Add the NeuroLines component */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
