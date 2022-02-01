import { GridItem, AspectRatio, Box, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { RiMusic2Line } from 'react-icons/ri';
import { Heading4, Heading5 } from '../../shared/headings/';

const NO_IMAGE =
  'https://s.discogs.com/5a4e8c21144258363e2f7ec77db99264660caf5e/images/spacer.gif';

const MusicCover = ({ entity }) => {
  const { cover_image, title } = entity;
  const [mainTitle, subtitle] = title.split(' - ');
  console.log(cover_image);

  return (
    <GridItem mb={4}>
      <AspectRatio ratio={1} w='full' mb={2}>
        <Box rounded={6}>
          {cover_image === NO_IMAGE ? (
            <Flex
              w='full'
              h='full'
              justifyContent='center'
              alignItems='center'
              bg='gray.800'
            >
              <Icon fontSize='4xl' as={RiMusic2Line} />
            </Flex>
          ) : (
            <Image
              src={cover_image}
              alt={title}
              layout='fill'
              objectFit='cover'
            />
          )}
        </Box>
      </AspectRatio>
      <Heading4 mb={1}>{mainTitle}</Heading4>
      <Heading5>{subtitle}</Heading5>
    </GridItem>
  );
};

export default MusicCover;
