import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { Heading3 } from '../shared/headings';
import MainContainer from '../shared/containers/MainContainer';

const Header = ({ ...props }) => {
  return (
    <MainContainer>
      <Flex
        w='100%'
        justify='space-between'
        align='center'
        pt={5}
        pb={2}
        {...props}
      >
        <Heading3>Your Collection</Heading3>
        <Icon fontSize='xl' as={RiSearchLine} position='relative' top='3px' />
      </Flex>
    </MainContainer>
  );
};

export default Header;
