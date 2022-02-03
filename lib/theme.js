import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      900: '#111',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

export default theme;
