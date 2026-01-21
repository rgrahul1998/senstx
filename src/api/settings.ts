import { callAPI } from "./client"

export interface SettingsMedia {
    page_reference: string
    block_no: string
    image_no: string
    attach_file: string
}

export interface DigitalInsightsSettings {
    company_email: string
    company_mobile: string
    company_add_line_1: string
    company_add_line_2: string
    media_list?: SettingsMedia[]
    contact_service_list?: string[]
}

export interface SettingsResponse {
    message: {
        success: boolean
        data: DigitalInsightsSettings
    }
}

export const getDigitalInsightsSettings = async (): Promise<DigitalInsightsSettings | null> => {
    try {
        const result = await callAPI("home", "senstx_default_data")
        if (result.message.success) {
            return result.message.data
        }
        return null
    } catch (error) {
        console.error("Failed to fetch settings:", error)
        return null
    }
}
