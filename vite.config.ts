import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            // Proxy API and file requests to the Frappe backend.
            // Ensure this target matches your API_URL in src/config.ts
            "/api": {
                target: "https://bo.crossrule.com",
                changeOrigin: true,
                secure: false,
            },
            "/files": {
                target: "https://bo.crossrule.com",
                changeOrigin: true,
                secure: false,
            },
        },
    },
})
