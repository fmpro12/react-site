import React, { useEffect, useRef } from 'react';
import '../styles.css'; // Import the styles for NeuroLines

const NeuroLines = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const createNeuroLine = () => {
      const neuroLine = document.createElement('div');
      neuroLine.classList.add('neuro-line');
      container.appendChild(neuroLine);

      const animateNeuroLine = () => {
        const lineHeight = Math.random() * 100 + 100; // Adjust the height as desired
        neuroLine.style.height = `${lineHeight}px`;

        const animationDuration = Math.random() * 3 + 2; // Adjust the duration as desired
        neuroLine.style.transition = `transform ${animationDuration}s linear`;

        neuroLine.style.transform = 'translate(0, 100%)';

        setTimeout(() => {
          container.removeChild(neuroLine);
        }, animationDuration * 1000);
      };

      requestAnimationFrame(animateNeuroLine);
    };

    const intervalId = setInterval(createNeuroLine, 500); // Adjust the interval as desired

    return () => clearInterval(intervalId);
  }, []);

  return <div className="neuro-lines" ref={containerRef}></div>;
};

export default NeuroLines;
