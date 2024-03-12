import Header from "./Header";
import logo1 from "./img/banner-sale-12_1695182579.webp";
import logo2 from "./img/nanoflare-800_1698800723.webp";
import logo3 from "./img/1000z-launch-website-banner_1695177885.webp";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as productService from "../service/product/ProductService";
import * as customerService from "../service/customer/CustomerService";
import * as orderService from "../service/order/CartService";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import authToken from "../service/units/UserToken";
import {toast} from "react-toastify";
import Cart from "./Cart";
import * as cartService from "../service/order/CartService";
// import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
import {showMsgWarning} from "../service/product/ProductService";
// import {loginGoogle} from "firebase-tools/lib/auth";

export default function Home() {
    const navigate = useNavigate();
    let username;
    const [nameSearch, setNameSearch] = useState("");
    const [product, setProduct] = useState([]);
    const [customer, setCustomer] = useState();
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [cart, setCart] = useState([]);
    const [sort, setSort] = useState("")

    useEffect(() => {
        getAll();
    }, [page,sort]);
    const getAll = async () => {
        try {
            let res = await productService.getAllProduct(page, nameSearch,sort);
            if (res.status === 204) {
                setProduct([]);
                setTotalPages(0);
            } else if (res.status === 200) {
                setTotalPages(res.data.totalPages);
                setProduct(res.data.content);
            }
        } catch (e) {
            navigate("/Error");
        }
    }

    const getAllCart = async (id) => {
        try {
            let res = await cartService.listCart(id);
            setCart(res.data);
        } catch (e) {
            navigate("/");
        }
    }

    const dontContainsSpecialCharacters = (string) => {
        const regex = /^[^!@#$%^&*()_+={}\[\]:;,<.>?\\\/'"`]*$/;
        return regex.test(string);
    };
    const search = () => {
        if (dontContainsSpecialCharacters(nameSearch)) {
            getAll().then()
        } else {
            showMsgWarning("Tên Tìm Kiếm Không Hợp Lệ")
        }
    }
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };


    const handleNameSearch = (value) => {
        setNameSearch(value);
    }


    const changeSortList = async (value) => {
        setSort(value);
        setPage(0);
    };


    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    if (authToken()) {
        username = authToken().sub;
    }
    const getByCustomer = async () => {
        try {
            let res = await customerService.getByCustomer(username);
            setCustomer(res.data);
            getAllCart(res.data.id);
        } catch (e) {
            navigate("/");
        }
    }

    useEffect(() => {
        getByCustomer();
    }, []);

    const addToCart = async (idProduct) => {
        try {
            if (authToken()){
                let data = await orderService.addToCart(customer.id, idProduct);
                if (data.status === 200) {
                    getAllCart(customer.id);
                    toast.success("Thêm sản phẩm thành công! ");
                }
            }else {
                toast.warning("Bạn phải đăng nhập mới mua hàng được");
                navigate("/login");
            }

        } catch (e) {
            navigate("/Error");
        }

    }

    if (!customer && username) {
        return null;
    }

    return (
        <>
            <Header  cart = {cart.length}/>
                    <div className="main">
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
                            {/*Search*/}
                            <div className="container">
                                <div className="row m-2">

                                    <form className="row col-5">
                                        <div className=" col-8">
                                            <input style={{marginLeft: "15px"}} type="text" name="name"
                                                   className="form-control"
                                                   onChange={(event => handleNameSearch(event.target.value))}
                                                   id="name"
                                                   placeholder="Tìm kiếm theo tên "/>
                                        </div>
                                        <div className="col-3">
                                            <button type="submit" className="btn btn-outline-secondary"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        search()
                                                        setPage(0)
                                                    }}>
                                                Tìm kiếm
                                            </button>
                                        </div>
                                    </form>

                                    <div className="col-5">

                                    </div>
                                    <div className="col-2">
                                        <select
                                            className="form-select"
                                            onChange={(event) => changeSortList(event.target.value)}
                                        >
                                            <option value="">Mặc đinh</option>
                                            <option value="ASC">Giá tăng dần</option>
                                            <option value="DESC">Giá giảm dần</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="container px-4 px-lg-5 mt-5">
                                <div
                                    className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                    {product ?
                                        (
                                            product.map(item =>
                                                <div key={item.id} className="col mb-5">
                                                    <div className="card h-100">
                                                        {(item.promotionalPrice !== item.startPrice)?
                                                        <div class="badge bg-danger text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                                                       :<></>
                                                        }
                                                        <NavLink to={`/detail/${item.id}`}>
                                                            <img className="card-img-top"
                                                                 src={item.mainImage}
                                                                 width="350" height="300"
                                                                 alt="..."/>
                                                        </NavLink>

                                                        <div className="card-body p-4">
                                                            <div className="text-center">
                                                                <p className="fw-bolder "
                                                                   title={item.name}>{item.name}</p>
                                                                <span
                                                                    className="text-danger">{VND.format(item.promotionalPrice)} </span>
                                                                {(item.promotionalPrice !== item.startPrice)?
                                                                    < small
                                                                    className="text-muted text-decoration-line-through"> {VND.format(item.startPrice)}</small>
                                                                    :
                                                                    <></>
                                                                }

                                                            </div>
                                                        </div>
                                                        <div
                                                            className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                            <div className="text-center">
                                                                <button onClick={() => addToCart(item.id)}
                                                                        className="btn btn-outline-danger mt-auto">
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
                            {
                                totalPages > 1 && (<Pagination page={page} totalPages={totalPages}
                                                               onPageChange={handlePageChange}/>)
                            }

                        </section>

                    </div>
                {/*)*/}
            {/*//     :*/}
            {/*//     (<Cart setShowCart={setShowCart} customer={customer}/>)*/}
            {/*// }*/}
            <Footer/>
        </>
    )
}