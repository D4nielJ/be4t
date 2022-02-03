import React from 'react';
import { AspectRatio, Box, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMusic2Line } from 'react-icons/ri';
import validateImage from '../../../lib/validateImage';
import { Heading4 } from '../../shared/headings';

const ArtistCover = ({ artist }) => {
  const { cover_image: coverImage, title, type, id } = artist;

  return (
    <div>
      <AspectRatio ratio={5 / 6} w={44} mb={2}>
        <Box rounded={6}>
          <Link href={`/resources/${type}/${id}`} passHref>
            <Box as='a' w='full' h='full'>
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
          </Link>
        </Box>
      </AspectRatio>
      <Heading4>{title}</Heading4>
    </div>
  );
};

export default ArtistCover;
