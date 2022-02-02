import { GridItem, AspectRatio, Box, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiMusic2Line } from 'react-icons/ri';
import validateImage from '../../../lib/validateImage';
import { Heading4, Heading5 } from '../../shared/headings/';

const MusicCover = ({ entity }) => {
  const {
    cover_image: coverImage,
    title,
    resource_url: resourceUrl,
    type,
    id,
  } = entity;
  const [mainTitle, subtitle] = title.split(' - ');

  return (
    <GridItem mb={4}>
      <Link href={`/resources/${type}/${id}`}>
        <a>
          <AspectRatio ratio={1} w='full' mb={2}>
            <Box rounded={6}>
              {validateImage(coverImage) ? (
                <Image
                  src={coverImage}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                />
              ) : (
                <Flex
                  w='full'
                  h='full'
                  justifyContent='center'
                  alignItems='center'
                  bg='gray.800'
                >
                  <Icon fontSize='4xl' as={RiMusic2Line} />
                </Flex>
              )}
            </Box>
          </AspectRatio>
          {subtitle ? (
            <div>
              <Heading4 mb={1}>{subtitle}</Heading4>
              <Heading5>{mainTitle}</Heading5>
            </div>
          ) : (
            <Heading4>{mainTitle}</Heading4>
          )}
        </a>
      </Link>
    </GridItem>
  );
};

export default MusicCover;
