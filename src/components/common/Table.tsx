import React, { useState } from "react";

// ---------------- Tabs Root ----------------
export function Tabs({
    defaultValue,
    children,
    className = "",
}: {
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}) {
    const [active, setActive] = useState(defaultValue);

    return (
        <div className={className}>
            {/* Pass active + setActive to children */}
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child, { active, setActive })
            )}
        </div>
    );
}

// ---------------- TabsList ----------------
export function TabsList({
    children,
    className = "",
    active,
    setActive,
}: any) {
    return (
        <div className={`flex gap-2 p-1  rounded-md  ${className}`}>
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child, { active, setActive })
            )}
        </div>
    );
}

// ---------------- TabsTrigger ----------------
export function TabsTrigger({
    value,
    children,
    active,
    setActive,
    className = "",
}: any) {
    const isActive = active === value;

    return (
        <button
            onClick={() => setActive(value)}
            className={`
        px-4 py-2 text-sm font-medium rounded-md 
        transition
       ${isActive
                    ? "bg-[#fafafa] text-black shadow-md"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }

        ${className}
      `}
        >
            {children}
        </button>
    );
}

// ---------------- TabsContent ----------------
export function TabsContent({
    value,
    active,
    children,
    className = "",
}: any) {
    if (value !== active) return null;

    return (
        <div className={`p-4 ${className}`}>{children}</div>
    );
}
