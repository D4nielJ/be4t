import { GridItem, AspectRatio, Box, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiMusic2Line, RiAddCircleFill } from 'react-icons/ri';
import { IoMdRemoveCircle } from 'react-icons/io';
import validateImage from '../../../lib/validateImage';
import { Heading4, Heading5 } from '../../shared/headings/';
import AddToCollection from './AddToCollection';

const MusicCover = ({ entity }) => {
  const { cover_image: coverImage, title, type, id } = entity;
  const [mainTitle, subtitle] = title.split(' - ');

  return (
    <GridItem mb={4}>
      <AspectRatio ratio={1} w='full' mb={2}>
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
          {type !== 'artist' && (
            <AddToCollection type={type} id={id}>
              <Icon
                as={RiAddCircleFill}
                position='absolute'
                right={2}
                top={2}
              />
            </AddToCollection>
          )}
        </Box>
      </AspectRatio>
      <Link href={`/resources/${type}/${id}`}>
        <a>
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
