import { VStack, AspectRatio, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../shared/containers/MainContainer';
import { Heading2 } from '../shared/headings';

const ArtistsDetails = ({ data }) => {
  const { images, name, profile } = data;
  return (
    <MainContainer>
      <VStack pt={12}>
        {images && (
          <AspectRatio w={64} ratio={3 / 4} mb={4}>
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
        <Heading2>{name}</Heading2>
        <Text
          fontSize='sm'
          textAlign='center'
          noOfLines='3'
          opacity='0.75'
          lineHeight='1.65'
        >
          {profile}
        </Text>
        {/* Format description */}
        {/* Expand description if noOfLines > 5 */}
        {/* External Link (?) */}
        {/* Releases */}
      </VStack>
    </MainContainer>
  );
};

export default ArtistsDetails;
