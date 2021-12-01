import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PUBLIC_KEY = "pk_live_51JxJXKCnJe78lmqNUvBd53pbRvFzIurGultR0j0vRSp8d1BFMFBHCn0ikApEbez8mReoLkSrUpMK5PC42ipxO64x00X0dphmRq"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
