import Commerce from '@chec/commerce.js';
import { Cart } from '@chec/commerce.js/cart';
import { Checkout } from '@chec/commerce.js/checkout';
import { Payment } from '@chec/commerce.js/payment';

const apiKey = import.meta.env.VITE_CHEC_PUBLICKEY;

export const commerce = new Commerce(apiKey, true);