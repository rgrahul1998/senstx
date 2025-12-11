import type { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
}

export function Label({
    children,
    className = "",
    htmlFor,
    ...props
}: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1 ${className}`}
            {...props}
        >
            {children}
        </label>
    );
}

