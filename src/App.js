import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import PostList from './components/PostList';
import Gallery from './components/Gallery';

const Container = styled.div`
  position: relative;
  z-index: 1; /* Ensure the container is above the AnimatedBackground */
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite, neurographicAnimation 20s linear infinite;
  z-index: 0; /* Lower stacking order for the AnimatedBackground */
`;

const HomeAll = () => {
  return (
    <>
      <Home />
      <PostList />
      <Gallery />
      {/* Add more sections/content for your one-page site */}
    </>
  );
};

function App() {
  return (
    <Router>
      <AnimatedBackground /> {/* Place the AnimatedBackground component at the root level */}
      <Container>
        <Routes>
          <Route path="/" element={<HomeAll />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
