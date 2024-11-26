import { http } from "@/lib/http"

export const fetchOurServicesContent = async (formData: FormData) => {
    const res = await http.post('/service-page', formData)
    return res.data
}