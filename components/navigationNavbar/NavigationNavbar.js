import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../shared/containers/MainContainer';
import Chevron from '../shared/buttons/Chevron';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useRouter } from 'next/router';

const NavigationNavbar = () => {
  const router = useRouter();

  return (
    <MainContainer pt={5} pb={2}>
      <Flex justify='space-between' alignItems='center'>
        <Chevron
          fontSize='xl'
          isLeft
          onClick={() => {
            router.back();
          }}
        />
        <Icon as={HiOutlineDotsVertical} />
      </Flex>
    </MainContainer>
  );
};

export default NavigationNavbar;
