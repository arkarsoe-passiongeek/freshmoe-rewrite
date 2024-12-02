import { http } from "@/lib/http"

export const fetchDownloadContent = async (formData: FormData) => {
    const res = await http.post('/contact-page', formData)
    return res.data
}

export const fetchDownloadApps = async () => {
    const res = await http.get('/release-version/getDownloadApps?type=public')
    return res.data
}