import { http } from "@/lib/http"

export const fetchAboutUsContent = async (formData: FormData) => {
    const res = await http.post('/about-page', formData)
    return res.data
}