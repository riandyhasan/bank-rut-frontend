import { Flex, Heading, Box } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";

const Transaction = () => {
  return (
    <Flex w="70vw" ml='30vw' overflowX='hidden' overflowY='auto' position='relative' minH='100vh'>
      <Flex px='2rem' flexDir="column" w="100%">
        <Heading fontSize="2em">Transaksi</Heading>
         <Flex gridGap='2rem' flexDir='column'>
            <Box w='80%'>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Username Tujuan"
              placeholder="Username..."
            />
            </Box>
            <Flex alignItems='center' gridGap='2rem'>
            <Box w='80%'>
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
            </Flex>
      </Flex>
      <Flex
          justifyContent="flex-end"
          alignItems="center"
          w="100%"
          mt="2rem"
          px='2rem'
        >
          <Button type="primary" text="Kirim" fs="1.1em" px="2rem" />

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Transaction;
