import { Flex, Heading, Table, Tbody, Thead, Tr, Td, Th,Box } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";

const BalanceRequest = () => {
  return (
    <Flex w="70vw" ml='30vw' overflowX='hidden' overflowY='auto' position='relative' minH='100vh'>
      <Flex px='2rem' flexDir="column" w="100%">
        <Heading fontSize="2em">Menunggu Persetujuan</Heading>
        <Table variant="simple" minW="30em" boxShadow='0px 4px 14px rgba(0, 0, 0, 0.25)' borderRadius='10px'>
        <Thead bg={colors.orange} >
          <Tr>
            <Th color={colors.white} p='0.5rem' textAlign="center">Nominal</Th>
            <Th color={colors.white} p='0.5rem' textAlign="center">Jenis</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric p='0.5rem' color={colors.grey} textAlign="center">Rp. 500000</Td>
            <Td color={colors.grey}  p='0.5rem'textAlign="center">Penambahan</Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading fontSize="2em" mt="4rem">Request Penambahan/Pengurangan Saldo</Heading>
      <Flex alignItems='center' gridGap='1rem'>
            <Box w='40%'>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Nominal"
              placeholder="Username..."
            />
            </Box>
            <Box w='20%'>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Mata Uang"
              placeholder="Username..."
            />
            </Box>
            <Box w='40%'>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Jenis"
              placeholder="Username..."
            />
            </Box>
      </Flex>
      <Flex
          justifyContent="flex-end"
          alignItems="center"
          w="100%"
          mt="2rem"
          px='2rem'
        >
          <Button type="primary" text="Ajukan" fs="1.1em" px="2rem" />

        </Flex>
      </Flex>
    </Flex>
  );
};

export default BalanceRequest;
