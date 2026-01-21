import { callAPI } from "./client"

export interface ContactFormData {
    first_name: string
    last_name: string
    email_id: string
    company?: string
    service_interest?: string
    phone?: string
    notes: string
}

export const submitContact = async (data: ContactFormData) => {
    const result = await callAPI("contact_us", "submit_contact", data)
    return result
}
