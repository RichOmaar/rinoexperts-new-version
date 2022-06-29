import React, { useState, useEffect } from 'react';
import '../components/summary/summary.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const Summary = () => {

    // const getStripe = () => {

    //     if(!stripePromise) {
    //         stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    //     }
    
    //     return stripePromise;
    // };

    // const stripe = getStripe();

    async function getStripe() {

        const response = await loadStripe(process.env.REACT_APP_STRIPE_KEY);

        return response;

    }

    let stripe = getStripe();

    const session_id = window.location.href.split('?')[1].split('=')[1];
    
    async function retrieveSessionStripe(session_id) {

        const session = await stripe.checkout.sessions.retrieve(
            session_id
        );

        return session;
    }

    useEffect(() => {
        // let response = retrieveSessionStripe(session_id);
        let response = retrieveSessionStripe('cs_test_a1NZdmsFYVNVRPPZIvxGAf4JJJGDcjU1Vmxgw6Nq1gswEcZec8hq0rgRUx');
        console.log(response);
    }, []);

  return (
    <div className="summary-container black-background pt-3 pb-4">
        Summary
    </div>
  )
}

export default Summary;