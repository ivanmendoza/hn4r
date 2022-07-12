import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import Header from './components/header';
import { Container, Spacer } from './components/container';
import Switch from './components/switch';

import './App.css';
import Favs from './components/favs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo="/images/hacker-news-logo.png" logo_alt="Hacker News" />
        <Container>
          <Spacer type="filters">
            <Switch
              options={[
                { label: 'All', href: '/', selected: true },
                { label: 'My faves', href: '/favs' },
              ]}
            />
          </Spacer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
