import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://your-api-base-url.com",
    mode: 'cors'
});

const axiosRequest = async(url, method, data, headers = {}) => {
    try {
        const response = await axiosInstance({
            url,
            method,
            data,
            headers
        });
        return response.data
    } catch (error) {
        console.error("Error in Axios request: ", error);
        return null;
    }
}
export default axiosRequest