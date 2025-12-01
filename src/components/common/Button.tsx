import { Button as MuiButton } from "@mui/material";
import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends MuiButtonProps {
  className?: string;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return <MuiButton {...props} className={twMerge("", className)} />;
};

export default Button;
