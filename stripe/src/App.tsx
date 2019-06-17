import React from 'react';
import CheckOutForm from './components/CheckOutForm'
import Random from './components/random'
import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';


const App: React.FC = () => {
  return (
    <StripeProvider apiKey="pk_test_R8UP53BBqT9ivd4QATV3nUch00W956TKoc">
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Random greeting="Zubin" />
        <Elements>
          <CheckOutForm />
        </Elements>
      </div>
    </StripeProvider>
  )
}

export default App;
