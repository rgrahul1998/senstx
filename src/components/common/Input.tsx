import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const Input = (props: TextFieldProps) => {
  return <TextField fullWidth variant="outlined" {...props} />;
};

export default Input;
