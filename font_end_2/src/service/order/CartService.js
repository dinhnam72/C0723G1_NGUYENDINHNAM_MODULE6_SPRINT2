import axios from "axios";




export const addToCart = async (idCustomer,idProduct)=>{
    try {
        let res = await axios.post(`http://localhost:8080/api/cart/add/${idCustomer}/${idProduct}`);
        return res;
    }catch (e) {
        return null;
    }
}
export const listCart = async (idCustomer)=>{
    try {
        let res = await axios.get(`http://localhost:8080/api/cart/list/${idCustomer}`);
        return res;
    }catch (e) {
        return null;
    }
}
export const deleteCart = async (idCustomer,idProduct) =>{
    try {
        let res = await axios.post(`http://localhost:8080/api/cart/delete/${idCustomer}/${idProduct}`);
        return res;
    }catch (e) {
        return null;
    }
}
export const calculation = async (idCustomer,idProduct,calculation) =>{
    try {
        let res = await axios.post(`http://localhost:8080/api/cart/addAmount/${idCustomer}/${idProduct}/${calculation}`);
        return res;
    }catch (e) {
        return null;
    }
}