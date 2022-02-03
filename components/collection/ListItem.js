import React from 'react';
import { Box, AspectRatio, Flex, VStack, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { Heading4, Heading5 } from '../shared/headings';
import { RiDeleteBin7Line } from 'react-icons/ri';
import RemoveFromCollection from '../shared/functional/RemoveFromCollection';

const ListItem = ({ item, setLoadCollection }) => {
  const {
    id,
    instance_id: instanceId,
    basic_information: { title, thumb, artists },
  } = item;

  return (
    <Flex
      as='li'
      listStyleType='none'
      bg='gray.900'
      w='full'
      p={2}
      alignItems='center'
      position='relative'
    >
      <AspectRatio ratio={1} maxW='80px' w='full' mr={4}>
        <Box rounded={2}>
          <Image src={thumb} alt='cover' layout='fill' objectFit='cover' />
        </Box>
      </AspectRatio>
      <VStack align='flex-start' spacing={0.5}>
        <Heading4>{title}</Heading4>
        <Heading5>{artists[0].name}</Heading5>
      </VStack>
      <RemoveFromCollection
        instanceId={instanceId}
        releaseId={id}
        setLoadCollection={setLoadCollection}
      >
        <Icon
          onClick={() => {}}
          as={RiDeleteBin7Line}
          position='absolute'
          right={4}
          bottom={4}
        />
      </RemoveFromCollection>
    </Flex>
  );
};

export default ListItem;
