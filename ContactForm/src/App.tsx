import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import SplashScreen from './components/SplashScreen';
import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Match this with the splash screen animation duration (2.5s + 0.5s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SplashScreen isVisible={showSplash} />
      <div style={{ visibility: showSplash ? 'hidden' : 'visible' }}>
        <ContactForm />
      </div>
    </>
  );
};

export default App;
