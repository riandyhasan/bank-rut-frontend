import { Flex, Heading } from "@chakra-ui/react";
import colors from "@src/utils/colors";
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      py={10}
      bg="linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
      w={!router.pathname.includes('/dashboard') ? "100%" : "70%"}
      ml={!router.pathname.includes('/dashboard') ? "" : "30%"}
    >
      <Heading textAlign="center" color={colors.white} fontSize={"0.85em"}>
        Dibuat oleh Riandy Hasan - 18220058
        <br />
        sebagai tugas seleksi labpro
      </Heading>
    </Flex>
  );
};

export default Footer;
