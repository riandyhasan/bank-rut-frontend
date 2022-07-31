import Image from "next/image";
import { Flex, Box, color } from "@chakra-ui/react";
import { useRouter } from "next/router";
import images from "@src/utils/images";
import Link from "next/link";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";

const Header = () => {
  const router = useRouter();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="24px 96px 24px 48px"
      boxShadow="0px 5px 4px rgba(0, 0, 0, 0.25)"
      w="100%"
    >
      <Link href="/">
        <Box cursor="pointer">
          <Image src={images.logoText} width={100} height={35} />
        </Box>
      </Link>
      <Flex alignItems="center" gridGap="40px">
        <Link href="/">
          <Box
            fontWeight="bold"
            cursor="pointer"
            color={router.pathname === "/" ? colors.primaryBlue : colors.black}
          >
            Home
          </Box>
        </Link>
        <Link href="/register">
          <Button
            type="primary"
            text="Login/Register"
            active={
              router.pathname === "/login" || router.pathname === "/register"
            }
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
