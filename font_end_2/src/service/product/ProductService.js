import axios from "axios";
import authHeader from "../auth/AuthService";
import {toast} from "react-toastify";

export const getAllProduct = async (page, nameSearch,trademark) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/products/list?page=${page}&nameProduct=${nameSearch}`);
        return rs;
    }catch (e){
        return undefined;
    }
}
export const admin = async () => {
    try {

        let rs = await axios.get("http://localhost:8080/api/products/admin",{headers:authHeader()});
        return rs;
    }catch (e){
        return undefined
    }
}
export function showMsgWarning(msg) {
    toast.warning(msg, {
        position: "top-right",
        autoClose: 2000,
    });
}