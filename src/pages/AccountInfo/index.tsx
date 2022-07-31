import { Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import Icon from "@src/components/Icon";
import colors from "@src/utils/colors";

const AccountInfo = () => {
  return (
    <Flex w="70vw" ml='30vw' overflowX='hidden' overflowY='auto' position='relative'>
      <Flex px='2rem' flexDir="column" w="100%">
        <Heading fontSize="2em">Profile</Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="2rem">
          <GridItem>
            <InputText
              value={'Rudi Tabuti'}
              setValue={() => null}
              isRequired={false}
              label="Nama Lengkap"
            />
          </GridItem>
          <GridItem>
            <InputText
              value={'Rudi Tabuti 12313'}
              setValue={() => null}
              isRequired={false}
              label="Username"
            />
          </GridItem>
        </Grid>
        <Flex
          w="100%"
          flexDir="column"
          gridGap='0.5rem'
          p='2rem'
          bg='linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)'
          borderRadius='17px'
          mt='3rem'
        >
         <Heading color={colors.white}>Rudi Tabuti</Heading>
         <Flex alignItems='center' color={colors.orange} gridGap='2rem'>
            <Icon name='coin-dollar' size={60} color={colors.orange} />
            <Heading>Rp. 5.000.000</Heading>
         </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='center' my='1.5rem' w='100%' gridGap='3rem'>
        <Flex
          w="50%"
          flexDir="column"
          gridGap='0.5rem'
          p='2rem'
          border={`3px solid ${colors.green}`}
          filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
          borderRadius='17px'
        >
         <Heading color={colors.green}>Total Pemasukan</Heading>
         <Flex alignItems='center' color={colors.green} gridGap='2rem'>
            <Icon name='coin-dollar' size={60} color={colors.green} />
            <Heading>Rp. 5.000.000</Heading>
         </Flex>
        </Flex>
        <Flex
          w="50%"
          flexDir="column"
          gridGap='0.5rem'
          p='2rem'
          border={`3px solid ${colors.red}`}
          filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
          borderRadius='17px'
        >
         <Heading color={colors.red}>Total Pengeluaran</Heading>
         <Flex alignItems='center' color={colors.red} gridGap='2rem'>
            <Icon name='coin-dollar' size={60} color={colors.red} />
            <Heading>Rp. 5.000.000</Heading>
         </Flex>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccountInfo;
