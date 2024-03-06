import axios from "axios";

export const getByCustomer= async (username)=>{
    try {
        let rs = await axios.get(`http://localhost:8080/api/customer/${username}`);
        return rs;
    }catch (e){
        return undefined;
    }
}