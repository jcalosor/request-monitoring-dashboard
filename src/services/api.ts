import axios from "axios";
import config from "../../lib/config";

const apiClient = axios.create({
    baseURL: config.base_url +`:${config.api_port}` + '/v1',
});


export const fetchHistory = async (page: number, limit: number) => {
    try {
        const res = await apiClient.get(`/api/history`, {
            params: { page, limit },
        });
        return res.data;
    }catch (error) {
        console.error(error);
    }

};