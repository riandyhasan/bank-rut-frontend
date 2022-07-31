import { Button } from "@chakra-ui/react";
import colors from "@src/utils/colors";

const CustomButtom = ({
  type,
  isDisabled = false,
  onClick,
  text,
  active = false,
  fs = "0.8em",
  px = "14px",
}: {
  type: "primary" | "secondary";
  isDisabled?: boolean;
  onClick?;
  text: string;
  active?: boolean;
  fs?: string;
  px?: string;
}) => {
  return (
    <Button
      onClick={onClick ?? null}
      disabled={isDisabled}
      bg={
        type === "primary"
          ? active
            ? colors.primaryBlue
            : "linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)"
          : colors.white
      }
      textAlign="center"
      color={type === "primary" ? colors.white : colors.primaryBlue}
      border="none"
      borderRadius="28px"
      py="14px"
      px={px}
      cursor="pointer"
      fontWeight={800}
      fontSize={fs}
    >
      {text}
    </Button>
  );
};

export default CustomButtom;
