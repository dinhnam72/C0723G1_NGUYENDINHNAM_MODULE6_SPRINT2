import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as orderService from "../service/order/CartService"



function SuccessPay() {
    const order = JSON.parse(localStorage.getItem('order'));
    const [searchParams] = useSearchParams();
    const status = searchParams.get("vnp_ResponseCode");
    const navigate=useNavigate();


    const transaction=async ()=>{
        if(status==="00"){
           const res = await orderService.saveOrder(order);
           if (res.status===200){
               toast.success("Thanh toán thành công");
               localStorage.removeItem('order');
               navigate("/");
           }else {
               toast.error("Thanh toán thất bại");
               navigate("/");
           }

        }  else {
            toast.error("Thanh toán thất bại");
            navigate("/");
        }
    }
    useEffect(()=>{
        transaction();
    },[])

    return (
        <div>
        </div>
    );
}

export default SuccessPay;