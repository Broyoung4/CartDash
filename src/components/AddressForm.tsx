import React, { useState } from 'react';
import { InputLabel, MenuItem, Select, Grid, Typography, FormControl, FormHelperText, FormControlLabel, Checkbox, RadioGroup, Radio, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

const AddressForm: React.FC = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={()=>{}}>
          <Grid container spacing={3}>
            
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm;