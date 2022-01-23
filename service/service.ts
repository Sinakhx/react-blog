import axios from "axios";
import { baseUrl } from "../config/generalConfig.js";

type id = string | number;
type requestObject = Record<string, string | number | boolean | null>;

export const api = {
    get: (path: string) => axios.get(`${baseUrl}${path}`),
    post: (path: string, newObj: requestObject) => axios.post(`${baseUrl}${path}`, newObj),
    put: async (path: string, newObj: requestObject) => {
        if (!path.startsWith("/users")) return axios.put(`${baseUrl}${path}`, newObj);
        const { email, ...filteredObj } = newObj;
        const res: Array<requestObject> = await axios.get(`${baseUrl}${path}`);
        const user = res[0];
        if (res.length > 1) throw new Error("403: Forbidden. modifying multiple data at once is prohibitted.");
        if (email && user.email !== email) throw new Error("403: Forbidden. email is readonly.");
        return axios.put(`${baseUrl}${path}`, { email: user.email, ...filteredObj });
    },
    patch: (path: string, obj: requestObject) => {
        if ("email" in obj) throw new Error("403: Forbidden. email is readonly.");
        return axios.patch(`${baseUrl}${path}`, obj);
    },
    delete: (path: string) => axios.delete(`${baseUrl}${path}`),
};
