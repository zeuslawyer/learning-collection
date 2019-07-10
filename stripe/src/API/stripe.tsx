import Stripe from 'stripe';
import secrets from '../secrets/secrets'


const stripe = new Stripe(secrets.STRIPE_SECRET_KEY)



export const prod = async () => {
  const product = await stripe.products.create({
    name: 'My sample product #1',
    type: 'service',
  });
  return product
};