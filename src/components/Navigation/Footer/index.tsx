import { Flex, Heading } from "@chakra-ui/react";
import colors from "@src/utils/colors";

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      py={10}
      bg="linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
      w="100%"
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
