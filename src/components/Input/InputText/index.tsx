import { FormControl, FormLabel, Input, Heading, Flex } from "@chakra-ui/react";
import colors from "@src/utils/colors";

const InputText = ({
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
  return (
    <FormControl isRequired={isRequired}>
      <Flex alignItems="center" mb="-0.7rem">
        <Heading color={colors.black}>{label}</Heading>
        <FormLabel fontSize="1.5em" htmlFor={htmlFor} color="red" />
      </Flex>
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
      />
    </FormControl>
  );
};

export default InputText;
