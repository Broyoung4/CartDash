import { Typography, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

interface ReviewProps {
  review: {
    content: string;
    author: string;
    rating: number;
  };
}

const Review: React.FC<ReviewProps> = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
          <ListItem style={{ padding: '10px 0' }} key={product.name}>
            <ListItemText primary={product.name} secondary={`${product.quantity} x ${product.price.formatted_with_symbol}`} />
            <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
            
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' style={{ fontWeight: '700' }}>{checkoutToken.subtotal.formatted_with_symbol}</Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;