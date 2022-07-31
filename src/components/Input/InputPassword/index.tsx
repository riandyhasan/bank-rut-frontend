import { useState } from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Heading,
  Flex,
} from "@chakra-ui/react";
import colors from "@src/utils/colors";
import Icon from "@src/components/Icon";

const InputPassword = ({
  isRequired,
  htmlFor,
  id,
  disabled = false,
  value,
  setValue,
  label,
  placeholder,
}: {
  isRequired: boolean;
  htmlFor?: string;
  id?: string;
  disabled?: boolean;
  value: string;
  setValue: (value: string) => void;
  label?: string;
  placeholder?: string;
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <FormControl isRequired={isRequired}>
      <Flex alignItems="center" mb="-0.7rem">
        <Heading color={colors.black}>{label}</Heading>
        <FormLabel fontSize="1.5em" htmlFor={htmlFor} color="red" />
      </Flex>
      <InputGroup>
        <Input
          fontSize="1em"
          id={id}
          borderRadius="15px"
          border={`4px solid ${colors.black}`}
          borderColor="black"
          isDisabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          px={18}
          py={12}
          color={colors.black}
          width="100%"
          type={show ? "text" : "password"}
        />
        <InputRightElement width="4.5rem" mt={10}>
          {show ? (
            <Icon
              name="eye-blocked"
              onClick={handleShow}
              color={colors.black}
              size={30}
            />
          ) : (
            <Icon
              name="eye"
              onClick={handleShow}
              color={colors.black}
              size={30}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default InputPassword;
