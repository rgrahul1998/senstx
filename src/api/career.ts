import client from "./client"

export interface JobOpening {
    name: string
    job_title: string
    department: string
    location: string
    short_description: string
    employment_type: string
    work_mode: string
}

export interface JobApplication {
    job_opening?: string
    full_name: string
    email: string
    phone: string
    resume: string
    cover_letter?: string
    linkedin_url?: string
    experience_years?: number
}

export const fetchJobOpenings = async (): Promise<JobOpening[]> => {
    const response = await client.get("/api/resource/Job Opening", {
        params: {
            fields: JSON.stringify([
                "name",
                "job_title",
                "department",
                "location",
                "short_description",
                "employment_type",
                "work_mode",
            ]),
            filters: JSON.stringify([
                ["is_published", "=", "1"],
                ["status", "=", "Open"],
            ]),
            limit_page_length: 50,
        },
    })
    return response.data.data
}

export const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append("file", file, file.name)
    formData.append("is_private", "1")

    const response = await client.post("/api/method/upload_file", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    return response.data.message.file_url
}

export const submitJobApplication = async (data: JobApplication) => {
    const response = await client.post("/api/resource/Job Application", data)
    return response.data.data
}
