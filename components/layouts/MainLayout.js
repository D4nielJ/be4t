import { VStack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <VStack minH='100vh'>
      {children}
      <Navbar />
    </VStack>
  );
};

export default MainLayout;
