// ---------------- Input Component ----------------
export function Input({ className = "", ...props }) {
    return (
        <input
            className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 ${className}`}
            {...props}
        />
    )
}
