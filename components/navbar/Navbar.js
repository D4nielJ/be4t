import { Flex } from '@chakra-ui/react';
import Link from './Link';
import React from 'react';
import {
  RiHome2Line,
  RiMusic2Line,
  RiAccountPinCircleLine,
} from 'react-icons/ri';

const Navbar = () => {
  return (
    <Flex
      position='fixed'
      bottom={0}
      left={0}
      right={0}
      justifyContent='space-evenly'
      pt={2}
      pb={4}
      bg='black'
      color='white'
      spacing={14}
    >
      <Link href='' as={RiHome2Line} text='Home' />
      <Link href='' as={RiMusic2Line} text='My music' />
      <Link href='' as={RiAccountPinCircleLine} text='Library' />
    </Flex>
  );
};

export default Navbar;
