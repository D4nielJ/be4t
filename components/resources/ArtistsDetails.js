import { VStack, AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../shared/containers/MainContainer';

const ArtistsDetails = ({ data }) => {
  const { images } = data;
  return (
    <MainContainer>
      <VStack>
        <AspectRatio w='80%' ratio={3 / 4}>
          <Box rounded={12}>
            <Image
              src={images.length > 0 && images[0].resource_url}
              alt='Portrait'
              layout='fill'
              objectFit='cover'
            />
          </Box>
        </AspectRatio>
      </VStack>
      {/* Image */}
      {/* Name */}
      {/* Profile */}
      {/* External Link (?) */}
    </MainContainer>
  );
};

export default ArtistsDetails;
