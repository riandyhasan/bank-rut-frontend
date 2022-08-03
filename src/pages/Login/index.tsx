import { Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import InputPassword from "@src/components/Input/InputPassword";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";
import { useState } from 'react';
import { UserLogin } from '@src/types/users'
import { login } from '@src/services/users'
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const payload = {
      username: username,
      password: password,
    } as UserLogin;
    const response = await login(payload);
    console.log(response);
  }

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
              value={username}
              setValue={setUsername}
              isRequired={true}
              label="Username"
              placeholder="Username..."
            />
          </GridItem>
          <GridItem>
            <InputPassword
              value={password}
              setValue={setPassword}
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
          <Button type="primary" text="Masuk" fs="1.1em" px="2rem"  onClick={handleLogin} />
          <Text>
            Belum memiliki akun?{" "}
            <Link
              href="/register"
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

export default Login;
