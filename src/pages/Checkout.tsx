import React, { useState, useEffect, useContext } from 'react';
//import Stepper from '../components/Stepper';
import {Paper, Stepper, Step, StepLabel, StepContent, Button, Typography, Grid, Container, TextField, FormControlLabel } from "@mui/material";
import { AddressForm, PaymentForm } from '../components';
import { commerce } from '../lib/commerce';
import { MyShopContext } from '../context/MyShopContext';
import { HashLoader } from 'react-spinners';



const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState<any>(null);
  const [shippingData, setShippingData] = useState<any>({});
  const steps = ['Shipping address', 'Payment details'];
  const {itemsArray, cart,  order, handleCaptureCheckout, errorMessage} = useContext<any>(MyShopContext);


  useEffect(()=> {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        
      }
    }
    generateToken();
  },[cart]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }
  
  const next = (data) => {
    setShippingData(data);
    nextStep();
  }
  
  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout= {handleCaptureCheckout}  nextStep={nextStep}/>;

  const Confirmation = () => <p>SucessFull</p>

  return (
    <>
      <div />
      <main className='mt-8 md:mt-12 px-6 py-4 flex flex-col justify-center items-center'>
        <Paper className='w-[55%] p-10'>
          <Typography variant="h4" align='center' gutterBottom>
            Checkout 
          </Typography>
          <Stepper  activeStep={activeStep} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
              ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken ? <Form /> : (<div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
            <HashLoader 
              color="#2563EB" 
              height={80} 
              width={80} 
              timeout={3000} // Adjust timeout if needed
            />


          </div>)}
        </Paper>
        {/* <div>
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '2rem', borderRadius: '1rem', padding: '2rem' }}
          <h3 className='text-center'>Checkout</h3>
          <Stepper steps={steps} activeStep={activeStep} onStepChange={handleStepChange} />

        </div> */}
      </main>
    </>
  );
};

export default Checkout;