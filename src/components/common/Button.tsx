import type { ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "default" | "secondary" | "success" | "danger" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    children,
    className = "",
    variant = "default",
    size = "md",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-1 focus:ring-blue-500";

    const variants = {
        default: "bg-[#163c63] text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        success: "bg-green-600 text-white hover:bg-green-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
        ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
