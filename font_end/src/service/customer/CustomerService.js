import axios from "axios";

export const getByCustomer= async (username)=>{
    try {
        let rs = await axios.get(`http://localhost:8080/customer/${username}`);
        return rs.data;
    }catch (e){
        return null;
    }
}