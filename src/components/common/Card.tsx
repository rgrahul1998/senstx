import { Card as MuiCard, } from "@mui/material";
import type { CardProps } from "@mui/material";

// ---------------- Card Component ----------------
const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <MuiCard className={className} {...props}>
      <CardContent className="p-0">{children}</CardContent>
    </MuiCard>
  );
};

// ---------------- CardHeader Component ----------------
export function CardHeader({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col gap-2 p-6 dark:bg-neutral-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// ---------------- CardTitle Component ----------------
export function CardTitle({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-md font-semibold leading-tight tracking-tight text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

// ---------------- CardDescription Component ----------------
export function CardDescription({ children, className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-gray-600 dark:text-neutral-300 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

// ---------------- CardContent Component ----------------
export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 text-gray-800 dark:text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}




export default Card;
