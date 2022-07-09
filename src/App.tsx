import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavsPage } from './pages/favs';
import { HomePage } from './pages/home';
import Header from './components/header';
import { Container, Spacer } from './components/container';
import Switch from './components/switch';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo="/images/hacker-news-logo.png" logo_alt="Hacker News" />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
