import React, { FC } from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import ProductCard from './ProductCard';

const Products: FC = () => {
  return (
    <Container maxWidth='lg' component='div'>
      <Box component='div'>
        <ProductCard />
      </Box>
    </Container>
  );
};
export default Products;
