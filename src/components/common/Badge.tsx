// ---------------- Badge Component ----------------
export function Badge({
    children,
    className = "",
    variant = "default",
    ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" | "success" | "danger" | "outline" }) {
    const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition";

    const variants = {
        default: "bg-blue-600 text-white",
        secondary: "bg-gray-100 text-gray-800",
        success: "bg-green-600 text-white",
        danger: "bg-red-600 text-white",
        outline: "border border-gray-300 text-gray-700",
    };

    return (
        <span
            className={`${base} ${variants[variant || "default"]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
