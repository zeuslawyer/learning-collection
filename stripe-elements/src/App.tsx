import React from 'react';
import StripeCheckout from './components/StripeCheckout'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <StripeCheckout />
    </div>
  );
}

export default App;
