// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const TEST_KEY = 'sk_test_wsxCfHvpkHLwIWMHuLkkSVTL00ikoeYopP'
const stripe = require('stripe')(TEST_KEY);

/**
 *   CREATE A PRODUCT
 */
export const prod = async () => {
  const product = await stripe.products.create({
    name: 'My sample product #1',
    type: 'service',
  });
  console.log(`new product:  
    ${JSON.stringify(product, null, 2)}
  `)
  return product
};

export const getCharge = async ()  => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  });
  console.log(`new charge:  
  ${JSON.stringify(charge, null, 2)}
`)
  return charge;
};

prod()
