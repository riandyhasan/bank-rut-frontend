import { Flex } from "@chakra-ui/react";
import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/Navigation/Header";
import Footer from "../src/components/Navigation/Footer";
import Sidebar from "../src/components/Navigation/Sidebar";
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '@src/redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Flex align="center" overflowX="hidden" w="100%" direction="column">
      {!router.pathname.includes('/dashboard') ? 
      <>
      <Header />
      <Component {...pageProps} />
      </>
      :
      <Flex alignItems="center" justifyContent='flex-start'>
        <Sidebar />
        <Component {...pageProps} />
      </Flex>
      }
      <Footer />
    </Flex>
    </PersistGate>
    </Provider>
  );
}

export default MyApp;
