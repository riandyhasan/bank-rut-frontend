import { Flex } from '@chakra-ui/react';
import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/Navigation/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Flex align='center' overflowX='hidden' w='100%' direction='column'>
      <Header />
      <Component {...pageProps} />
    </Flex>
  )
}

export default MyApp
