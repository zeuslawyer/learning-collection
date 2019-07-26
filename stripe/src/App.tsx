import React from 'react';
import CheckOutForm from './components/CheckOutForm'
import SectionDivider from './components/random'
import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';

import {prod} from './API/stripe'


const App: React.FC = () => {
  console.log(prod());
  return (
    <h1>React Stripe Elements Example</h1>
  )

  // return (
  //   <StripeProvider apiKey="pk_test_R8UP53BBqT9ivd4QATV3nUch00W956TKoc">
  //     <div className="example">
  //       <h1>React Stripe Elements Example</h1>
  //       <SectionDivider sectionName="Payments" />
  //       <Elements>
  //         <CheckOutForm />
  //       </Elements>

  //       <SectionDivider sectionName = "Billing" />
  //     </div>
  //   </StripeProvider>
  // )
}

export default App;
