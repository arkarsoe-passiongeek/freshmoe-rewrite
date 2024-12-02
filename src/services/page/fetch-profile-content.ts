import { http } from "@/lib/http"

export const fetchProfileContent = async (formData: FormData) => {
    try {
        const res = await http.post('/profile-page', formData)
        return res.data
    } catch (error) {
        return { data: {}, error }
    }
}