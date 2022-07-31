import { Flex, Box, Heading } from "@chakra-ui/react";
import images from "@src/utils/images";
import Image from "next/image";
import colors from "@src/utils/colors";
import Button from "@src/components/Button";
import Link from "next/link";
import Icon from "@src/components/Icon";
import { IconList } from "@src/components/Icon/type";

const ITEM = [
  {
    name: "Agak Mudah",
    icon: "point-up" as IconList,
  },
  {
    name: "Rada Cepat",
    icon: "power" as IconList,
  },
  {
    name: "Pelayanan OKE",
    icon: "wink" as IconList,
  },
];

const Landing = () => {
  return (
    <Flex flexDir="column">
      <Flex
        flexDir="column"
        bg="linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
        justifyContent="center"
        alignItems="center"
        p={30}
        h="86vh"
      >
        <Box>
          <Image src={images.logoText} width={513} height={162} />
        </Box>
        <Heading textAlign="center" color={colors.white} mt={59} mb={40}>
          Bersama membankrutkan diri,
          <br />
          Kalau bisa bankrut kenapa harus untung?
          <br />
          #MelekKebankrutan
        </Heading>
        <Link href="/register">
          <Button type="secondary" text="Daftar Sekarang!" />
        </Link>
      </Flex>

      <Flex flexDir="column" py={70} px={30}>
        <Heading fontSize="2em">Kenapa Harus Bank Rut?</Heading>
        <Flex alignItems="center" justifyContent="center" gridGap={200}>
          {ITEM.map((item, idx) => (
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              key={idx}
            >
              <Icon name={item.icon} size={205} color={colors.primaryBlue} />
              <Heading textAlign="center">{item.name}</Heading>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Landing;
