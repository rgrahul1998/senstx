import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useRef,
    type ReactNode,
} from "react"
import { getDigitalInsightsSettings, type DigitalInsightsSettings } from "../api/settings"

interface SettingsContextType {
    settings: DigitalInsightsSettings | null
    loading: boolean
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<DigitalInsightsSettings | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchInitiated = useRef(false)

    useEffect(() => {
        if (fetchInitiated.current) return
        fetchInitiated.current = true

        const fetchSettings = async () => {
            try {
                const data = await getDigitalInsightsSettings()
                if (data) {
                    setSettings(data)
                }
            } catch (error) {
                console.error("Failed to load settings:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchSettings()
    }, [])

    return (
        <SettingsContext.Provider value={{ settings, loading }}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = () => {
    const context = useContext(SettingsContext)
    if (context === undefined) {
        throw new Error("useSettings must be used within a SettingsProvider")
    }
    return context
}
