import { VStack, AspectRatio, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../shared/containers/MainContainer';
import { Heading2 } from '../shared/headings';

const ResourceDetails = ({ data }) => {
  const { images, title, artists } = data;
  return (
    <MainContainer>
      <VStack pt={20}>
        {images && (
          <AspectRatio w={64} ratio={1} mb={4}>
            <Box rounded={12}>
              <Image
                src={images[0].resource_url}
                alt='Portrait'
                layout='fill'
                objectFit='cover'
              />
            </Box>
          </AspectRatio>
        )}
        <Heading2>{title}</Heading2>
        {artists && (
          <Text fontSize='sm' textAlign='center' opacity='0.75'>
            {artists[0].name}
          </Text>
        )}
        {/* Genres */}
        {/* Year */}
        {/* Qty on sale and Lowest Price */}
        {/* Tracklist */}
      </VStack>
    </MainContainer>
  );
};

export default ResourceDetails;
