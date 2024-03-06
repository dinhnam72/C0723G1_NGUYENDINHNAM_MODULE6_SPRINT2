import axios from "axios";
import authHeader from "../auth/AuthService";
import {toast} from "react-toastify";

export const getAllProduct = async (page, nameSearch,sort,trademark) => {
    console.log(sort)
    try {
        let rs = await axios.get(`http://localhost:8080/api/products/list?page=${page}&nameProduct=${nameSearch}&sort=${sort}`);
        return rs;
    }catch (e){
        console.log(e);
    }
}
export const getProductById = async (id) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/products/detail/${id}`);
        return rs;
    }catch (e){
        console.log(e)
    }
}

export function showMsgWarning(msg) {
    toast.warning(msg, {
        position: "top-right",
        autoClose: 2000,
    });
}
export function changeImage(image) {

    var container = document.getElementById("mainImage");
    container.src = image;
}

// xuong dong khi gap dau cham
export function formatDescription(description) {
    // Nếu không có mô tả hoặc không phải là chuỗi, trả về mô tả không được xử lý
    if (!description || typeof description !== 'string') {
        return description;
    }
    // Thêm ký tự xuống dòng sau mỗi dấu chấm
    return description.replace(/\./g, '.\n');
}