import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api",
    withCredentials: true,
    headers: {
        "Authorization": "Bearer 9c958bdb87608b9bd5993a1b09674f197cdb18092361a967e1c2920828c51680d08f4b4b436d7d137c5f0a2733c08d034f8d5b02f8583dd824023c0154ead8ee2b8125e0bc4ff548e10aa2217a87033b17f9747611e00a9af1ca2daa657a2355e71b8156a79d583197286303a8dcd1274803b5736268354ec4cb878edeb17976",
    },
});

export const fetchData = async (contentType) => {
    try {
        const response = await api.get(`/${contentType}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching conteng:", error)
        throw error;
    }
};