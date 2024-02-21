import Header from "./Header";
import logo1 from "./img/banner-sale-12_1695182579.webp";
import logo2 from "./img/nanoflare-800_1698800723.webp";
import logo3 from "./img/1000z-launch-website-banner_1695177885.webp";
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import * as productService from "../service/product/ProductService";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import authToken from "../service/units/UserToken";
import ModalLogout from "./ModalLogout";

export default function Home() {
    const navigate = useNavigate();


    const [nameSearch, setNameSearch] = useState([])

    const [product, setProduct] = useState([]);


    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getAll(0);

    }, []);

    const getAll = async (page) => {
        try {
            let data = await productService.getAllProduct(page);
            console.log(data);
            setProduct(data.content);
        } catch (e) {
            navigate("/Error");
        }
    }

    // const getAllProductPage = async (page,nameSearch) => {
    //     try {
    //         let data = await productService.getAllProductPage(page,nameSearch);
    //         setTotalPages(data.totalPages)
    //     } catch (e) {
    //         navigate("/Error");
    //     }
    // }
    //
    // const handleNameSearch = (value) =>{
    //     setNameSearch(value);
    // }
    //
    // const submitSearch = async () =>{
    //     try {
    //         let res = await productService.getAllProduct(0,nameSearch);
    //         setProduct(res.content);
    //         setTotalPages(Math.ceil(res.totalElements/res.size))
    //     } catch (e){
    //         navigate("/Error");
    //     }
    // }


    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    // const handlePageClick = (event) => {
    //     getAll(event.selected, nameSearch)
    // }


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
                                                       title="Cặp Vợt Cầu Lông Kumpoo PC-66 (Nội Địa Trung)">{item.name}</p>
                                                    <span
                                                        className="text-danger">{VND.format(item.promotionalPrice)}</span>
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center"><a
                                                    className="btn btn-outline-danger mt-auto"
                                                    href="#">Đặt
                                                    hàng </a></div>
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