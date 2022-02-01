import { GridItem, AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Heading4 from '../../shared/headings/Heading4';
import Heading5 from '../../shared/headings/Heading5';

const MusicCover = ({ entity }) => {
  const { cover_image, title } = entity;
  const [mainTitle, subtitle] = title.split(' - ');
  console.log(mainTitle, subtitle);

  return (
    <GridItem mb={4}>
      <AspectRatio ratio={1} w='full' mb={2}>
        <Box rounded={6}>
          <Image src={cover_image} alt={title} layout='fill' />
        </Box>
      </AspectRatio>
      <Heading4 mb={1}>{mainTitle}</Heading4>
      <Heading5>{subtitle}</Heading5>
    </GridItem>
  );
};

export default MusicCover;
