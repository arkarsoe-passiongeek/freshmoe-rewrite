import { http } from "@/lib/http"

export const fetchHomeContent = async (formData: FormData) => {
    try {
        const res = await http.post('/home-page', formData)
        return res.data
    } catch (error) {
        return { data: {} }
    }
}