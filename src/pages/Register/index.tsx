import { Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import InputText from "@src/components/Input/InputText";
import InputPassword from "@src/components/Input/InputPassword";
import InputFile from "@src/components/Input/InputFile";
import Button from "@src/components/Button";
import colors from "@src/utils/colors";
import { UserRegister } from '@src/types/users'
import { register } from '@src/services/users'
import Link from 'next/link';
import { useState } from 'react';
import { app, db } from '@src/utils/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';

const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retypePassword, setRetypePassword] = useState<string>('');
  const [file, setFile] = useState<File>(null);
  const router = useRouter();

  const handleRegister = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `ktp/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(ref(storage, `ktp/${file.name}`)).then(async function (url){
        const payload = {
          full_name: fullname,
          username: username,
          password: password,
          ktp: url
        } as UserRegister
        try{
          const response = await register(payload);
          alert(response.message);
          router.push('/dashboard/account-info');
        }catch(e){
          alert(e.message);
        }
      })
    })
  }

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
              value={fullname}
              setValue={setFullname}
              isRequired={true}
              label="Nama Lengkap"
              placeholder="Name lengkap..."
            />
          </GridItem>
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
          <GridItem>
            <InputPassword
              value={retypePassword}
              setValue={setRetypePassword}
              isRequired={true}
              label="Ulangi Password"
              placeholder="Ulangi password..."
            />
          </GridItem>
          <GridItem w="50%">
            <InputFile
              file={file}
              setFile={setFile}
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
          <Button type="primary" text="Daftar" fs="1.1em" px="2rem" onClick={handleRegister} />
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
              }}>Masuk</span>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
