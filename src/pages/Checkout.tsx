import React, { useState } from 'react';
//import Stepper from '../components/Stepper';
import {Paper, Stepper, Step, StepLabel, StepContent, Button, Typography, Grid, Container, TextField, FormControlLabel } from "@mui/material";
import { AddressForm, PaymentForm } from '../components';


const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping address', 'Payment details'];
  /* const handleStepChange = (step: number) => {
    setActiveStep(step);
  }; */
  const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />;

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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
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