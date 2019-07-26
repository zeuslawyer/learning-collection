import Stripe from 'stripe';
import secrets from '../secrets/secrets'

const TEST_KEY = 'sk_test_wsxCfHvpkHLwIWMHuLkkSVTL00ikoeYopP'
const stripe = new Stripe(TEST_KEY)



export const prod = async () => {
  const product = await stripe.products.create({
    name: 'My sample product #1',
    type: 'service',
  });
  console.log(`new product:  
    ${product}
  `)
  return product
};

