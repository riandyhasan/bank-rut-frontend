import {
  FormControl,
  FormLabel,
  Heading,
  Box,
  Flex,
  Square,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import colors from "@src/utils/colors";

const InputFile = ({
  isRequired,
  htmlFor,
  disabled = false,
  file,
  setFile,
  label,
  multiple = false,
  type,
}: {
  isRequired: boolean;
  htmlFor?: string;
  disabled?: boolean;
  file: string;
  setFile: (value: File) => void;
  label?: string;
  multiple?: boolean;
  type: string;
}) => {
  const fileRef = useRef(null);
  const handleOnChange = (e) => {
    if (multiple) {
      setFile(e.target.files);
    } else {
      setFile(e.target.files[0]);
    }
  };
  return (
    <FormControl isRequired={isRequired}>
      <Flex alignItems="center" mb="-0.7rem">
        <Heading color={colors.black}>{label}</Heading>
        <FormLabel fontSize="1.5em" htmlFor={htmlFor} color="red" />
      </Flex>
      <Square
        bg={disabled ? colors.grey : colors.primaryBlue}
        borderRadius="11px"
        cursor="pointer"
        onClick={() => (disabled ? null : fileRef.current.click())}
        fontSize={["0.5em", "0.7em", "1em", "1em"]}
        color={colors.white}
        fontWeight="bold"
        px="17px"
        py="15px"
      >
        <Box pl="3px">
          <input
            type="file"
            hidden
            ref={fileRef}
            accept={type}
            onChange={handleOnChange}
            multiple={multiple}
          />
          {file != null ? "Change File" : "Upload File"}
        </Box>
      </Square>
    </FormControl>
  );
};

export default InputFile;
