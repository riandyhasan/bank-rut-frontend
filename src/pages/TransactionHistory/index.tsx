import { Flex, Heading, Table, Tbody, Thead, Tr, Td, Th } from "@chakra-ui/react";
import colors from "@src/utils/colors";

const TransactionHistory = () => {
  return (
    <Flex w="70vw" ml='30vw' overflowX='hidden' overflowY='auto' position='relative' minH='100vh'>
      <Flex px='2rem' flexDir="column" w="100%">
        <Heading fontSize="2em">Riwayat Transaksi</Heading>
        <Table variant="simple" minW="30em" boxShadow='0px 4px 14px rgba(0, 0, 0, 0.25)' borderRadius='10px'>
        <Thead bg={colors.orange} >
          <Tr>
            <Th color={colors.white} p='0.5rem' textAlign="center">Pengirim/Tujuan</Th>
            <Th color={colors.white} p='0.5rem' textAlign="center">Jenis</Th>
            <Th color={colors.white} p='0.5rem' textAlign="center">Jumlah</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric p='0.5rem' color={colors.grey} textAlign="center">Udin</Td>
            <Td color={colors.grey}  p='0.5rem'textAlign="center">Keluar</Td>
            <Td color={colors.grey}  p='0.5rem'textAlign="center">Rp. 500000</Td>
          </Tr>
        </Tbody>
      </Table>
      </Flex>
    </Flex>
  );
};

export default TransactionHistory;
