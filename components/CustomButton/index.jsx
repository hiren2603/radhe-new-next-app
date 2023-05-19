import { Button } from "@mui/material";

const CustomButton = ({
  buttonText,
  variant,
  buttonIcon,
  customClass,
  color = "primary",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      startIcon={buttonIcon}
      sx={customClass}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
