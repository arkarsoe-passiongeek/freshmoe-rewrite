import { http } from "@/lib/http"

export const fetchOurServicesContent = async (formData: FormData) => {
    try {
        const res = await http.post('/service-page', formData)
        return res.data
    } catch (error) {
        return { data: {}, error }
    }
}