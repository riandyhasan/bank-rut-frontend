import { Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import InputPassword from "@src/components/Input/InputPassword";
import InputFile from "@src/components/Input/InputFile";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";
import Link from 'next/link';

const Register = () => {
  return (
    <Flex w="100%">
      <Flex
        w="30%"
        bg="linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
      />
      <Flex p={66} flexDir="column" w="100%">
        <Heading fontSize="4em">Daftar</Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="2rem">
          <GridItem>
            <InputText
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Nama Lengkap"
              placeholder="Name lengkap..."
            />
          </GridItem>
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
          <GridItem>
            <InputPassword
              value={null}
              setValue={() => null}
              isRequired={true}
              label="Ulangi Password"
              placeholder="Ulangi password..."
            />
          </GridItem>
          <GridItem w="50%">
            <InputFile
              file={null}
              setFile={() => null}
              isRequired={true}
              label="Foto KTP"
              type="image/*,.pdf"
            />
          </GridItem>
        </Grid>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          flexDir="column"
        >
          <Button type="primary" text="Daftar" fs="1.1em" px="2rem" />
          <Text>
            Sudah memiliki akun?{" "}
            <Link
              href="/login"
              style={{
                textDecoration: "none",
                color: colors.primaryBlue,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <span               
              style={{
                textDecoration: "none",
                color: colors.primaryBlue,
                fontWeight: "bold",
                cursor: "pointer",
              }}>Daftar</span>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
