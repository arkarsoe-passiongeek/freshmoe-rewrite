import { http } from "@/lib/http"

export const fetchContactContent = async (formData: FormData) => {
    try {
        const res = await http.post('/contact-page', formData)
        return res.data
    } catch (error) {
        return { data: {}, error }
    }
}