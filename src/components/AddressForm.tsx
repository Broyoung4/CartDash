import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, Select, Grid, Typography, FormControl, FormHelperText, FormControlLabel, Checkbox, RadioGroup, Radio, Button } from '@mui/material';
import FormInput from './CustomTextField';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../lib/commerce';
import { Link } from 'react-router-dom';

const AddressForm: React.FC = ({ checkoutToken, next }) => {
  //iniitialize form select state
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');


  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
  const options = shippingOptions.map((option)=> ({ id: option.id, label: `${option.description} - ${option.price.formatted_with_symbol}` }))
  
  
  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchSubdivisions = async (countryCode: any) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
      setShippingSubdivisions(subdivisions)
      setShippingSubdivision(Object.keys(subdivisions)[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchShippingOptions = async (checkoutTokenId, country: any, region: any, ) => {
    try {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
      setShippingOptions(options);
      setShippingOption(options[0].id);
    } catch (error) {
      console.log(error);
    }
  }

  
  
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if(shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  },[shippingSubdivision])
  return (

    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next(data.firstName, data.lastName, data.address1, data.email, data.city, data.zip, shippingCountry, shippingSubdivision, shippingOption))}>
          <Grid container spacing={3}>
            <FormInput name='firstName' label='First name' />
            <FormInput name='lastName' label='Last name' />
            <FormInput name='address1' label='Address' />
            <FormInput name='email' label='Email' />
            <FormInput name='city' label='City' />
            <FormInput name='zip' label='ZIP / Postal code' />
            <Grid item xs={12} sm={6}>
              <InputLabel >Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    <em>{country.label}</em>
                  </MenuItem>

                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel >Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    <em>{subdivision.label}</em>
                  </MenuItem>

                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel >Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    <em>{option.label}</em>
                  </MenuItem>

                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to='/cart' variant='outlined'>Back to Cart</Button>
            <Button type='submit' variant='contained' color='primary'>Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm;