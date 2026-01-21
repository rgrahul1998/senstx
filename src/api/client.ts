import axios from "axios"
import { API_URL } from "../config"

const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export const callAPI = async (entity: string, method: string, payload: any = {}) => {
    const response = await client.post("/api/method/acuman_profile.acuman_profile.router.route.class_map", {
        entity,
        method,
        ...payload,
    })
    return response.data
}

export default client
