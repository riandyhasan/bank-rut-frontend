import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import BalanceRequest from "../../src/pages/BalanceRequest";

const BalanceRequestPage: NextPage = () => {
  return (
    <Flex w="100%" flexDir="column">
      <Head>
        <title>Bank Rut - Balance Request</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BalanceRequest />
    </Flex>
  );
};

export default BalanceRequestPage;
