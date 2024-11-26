import { http } from "@/lib/http"

export const fetchHomeContent = async (formData: FormData) => {
    const res = await http.post('/home-page', formData)
    return res.data
}