import { http } from "@/lib/http"

export const downloadApp = async (downloadId: any) => {
    const res = await http.post('user/app/download', {
        id: downloadId
    })
    return res.data
}