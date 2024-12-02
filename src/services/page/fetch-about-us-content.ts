import { http } from "@/lib/http"

export const fetchAboutUsContent = async (formData: FormData) => {
    try {
        const res = await http.post('/about-page', formData)
        return res.data
    } catch (error) {
        return { data: {}, error }
    }
}