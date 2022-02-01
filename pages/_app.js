import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
