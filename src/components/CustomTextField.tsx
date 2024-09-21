import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

/* 
interface CustomTextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 
*/

const FormInput: React.FC = ({ name, label }) => {
  const { control } = useFormContext();
  
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
        render={({ field }) => ( // This is the render function
          <TextField 
            {...field} // Pass field props to TextField
            fullWidth
            label={label} 
            required
          />
        )}
        />
    </Grid>
  );
};

export default FormInput;