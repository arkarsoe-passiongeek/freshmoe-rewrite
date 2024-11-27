import { http } from "@/lib/http"

export const fetchProfileContent = async (formData: FormData) => {
    const res = await http.post('/profile-page', formData)
    return res.data
}