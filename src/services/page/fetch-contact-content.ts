import { http } from "@/lib/http"

export const fetchContactContent = async (formData: FormData) => {
    const res = await http.post('/contact-page', formData)
    return res.data
}