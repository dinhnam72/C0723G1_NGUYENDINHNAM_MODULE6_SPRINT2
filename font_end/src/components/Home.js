import Header from "./Header";
import logo1 from "./img/banner-sale-12_1695182579.webp";
import logo2 from "./img/nanoflare-800_1698800723.webp";
import logo3 from "./img/1000z-launch-website-banner_1695177885.webp";
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import * as productService from "../service/product/ProductService";
import * as customerService from "../service/customer/CustomerService";
import * as orderService from "../service/order/OrderService";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import authToken from "../service/units/UserToken";
import ModalLogout from "./ModalLogout";
import {toast} from "react-toastify";

export default function Home() {
    const navigate = useNavigate();
    let role;
    let username;

    const [nameSearch, setNameSearch] = useState([]);

    const [product, setProduct] = useState([]);
    const [customer, setCustomer] = useState([]);


    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getAll(0);

    }, []);

    const getAll = async (page) => {
        try {
            let data = await productService.getAllProduct(page);
            setProduct(data.content);
        } catch (e) {
            navigate("/Error");
        }
    }


    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    if (authToken()){
        role = authToken().roles[0].authority;
        username = authToken().sub;
    }
    const getByCustomer = async () => {
        try {
            let data = await customerService.getByCustomer(username);
            setCustomer(data);
        } catch (e) {
            navigate("/Error");
        }
    }
    useEffect(() => {
        getByCustomer();
    }, []);
    const addToCart = async (idProduct) => {
        try {
            let data = await orderService.addToCart(customer.id,idProduct);
            if (data.status===200){
                toast.success("Thêm sản phẩm thành công! ");
            }
        } catch (e) {
            navigate("/Error");
        }

    }


    return (
        <>
            <Header/>
            <div className=" ">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo1} className="d-block w-100" alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img src={logo2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={logo3} className="d-block w-100"
                                 alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/*Danh sach*/}
            <section className="py-5">
                <h2 className="text-center td">Danh sách vợt</h2>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {product ?
                            (
                                product.map(item =>
                                    <div key={item.id} className="col mb-5">
                                        <div className="card h-100">
                                            <img className="card-img-top"
                                                 src={item.mainImage}
                                                 width="350" height="300"
                                                 alt="..."/>
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <p className="fw-bolder "
                                                       title={item.name}>{item.name}</p>
                                                    <span
                                                        className="text-danger">{VND.format(item.promotionalPrice)}</span>
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center">
                                                    <button onClick={()=>addToCart(item.id)} className="btn btn-outline-danger mt-auto">
                                                        Đặt hàng
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
                            )}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}