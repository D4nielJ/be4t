import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <Box minH='100vh' bg='#060606' color='white' pb={24}>
      {children}
      <Navbar />
    </Box>
  );
};

export default MainLayout;
