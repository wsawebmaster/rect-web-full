'use client';

import React from 'react';

import './App.css';

import { Counter } from './components/counter.component';

function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <hr />
      <Counter />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header 
      title="Título da Página" 
      subtitle="Subtítulo da Página"
      />
    </div>
  );
}

export default App;
