import { Card as MuiCard, CardContent } from "@mui/material";
import type { CardProps } from "@mui/material";

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <MuiCard className={className} {...props}>
      <CardContent style={{ padding: "0px" }}>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
