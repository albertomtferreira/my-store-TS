import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
export const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
};