import client from "./client"

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
}

export interface SettingsResponse {
    message: {
        success: boolean
        data: DigitalInsightsSettings
    }
}

export const getDigitalInsightsSettings = async (): Promise<DigitalInsightsSettings | null> => {
    try {
        const response = await client.get<SettingsResponse>(
            "/api/method/acuman_profile.acuman_profile.api.digital_settings.get_digital_insights_settings",
        )
        if (response.data.message.success) {
            return response.data.message.data
        }
        return null
    } catch (error) {
        console.error("Failed to fetch settings:", error)
        return null
    }
}
