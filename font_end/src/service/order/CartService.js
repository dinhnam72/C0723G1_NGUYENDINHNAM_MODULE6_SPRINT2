import axios from "axios";

export const addToCart = async (idCustomer,idProduct)=>{
    try {
        let res = await axios.post(`http://localhost:8080/cart/add/${idCustomer}/${idProduct}`);
        return res;
    }catch (e) {
        return null;
    }
}