import { Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import InputPassword from "@src/components/Input/InputPassword";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";

const Login = () => {
  return (
    <Flex w="100%">
      <Flex
        w="30%"
        bg="linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
      />
      <Flex p={66} flexDir="column" w="100%">
        <Heading fontSize="4em">Masuk</Heading>
        <Grid gridTemplateColumns="repeat(1, 1fr)" gap="2rem">
          <GridItem>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Username"
              placeholder="Username..."
            />
          </GridItem>
          <GridItem>
            <InputPassword
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Password"
              placeholder="Password..."
            />
          </GridItem>
        </Grid>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          flexDir="column"
          mt="2rem"
        >
          <Button type="primary" text="Masuk" fs="1.1em" px="2rem" />
          <Text>
            Sudah memiliki akun?{" "}
            <a
              href="/login"
              style={{
                textDecoration: "none",
                color: colors.primaryBlue,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Daftar
            </a>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
