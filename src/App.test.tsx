import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './App.css';
import Pokedex from './components/Pokedex';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


function App() {
  return (
    <Pokedex/>
  );
}

export default App;