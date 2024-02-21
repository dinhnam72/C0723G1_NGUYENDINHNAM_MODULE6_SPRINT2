import axios from "axios";

export const getAllProduct = async (page, nameSearch,trademark) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/products/list?page=${page}`);
        return rs.data;
    }catch (e){
        return undefined
    }
}