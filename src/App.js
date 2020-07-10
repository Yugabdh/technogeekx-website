import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <header>
        <NavbarPage />
      </header>
      <main style={{ marginTop: '4rem' }}>
        <Routes />
      </main>
      <FooterPage />
    </Router>
  );
}

export default App;
