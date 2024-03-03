import axios from "axios";
import authHeader from "../auth/AuthService";


export const pay = async (price,id) => {
    try {
        let res =await axios.get(`http://localhost:8080/api/pay?price=${price}&id=${id}`,{ headers: authHeader() });
        return res;
    } catch (e) {
        return undefined;
    }
}