import Header from "./Header";
import Footer from "./Footer";
import authToken from "../service/units/UserToken";
import * as customerService from "../service/customer/CustomerService";
import {useEffect, useState} from "react";
import * as cartService from "../service/order/CartService";
import {useNavigate, useParams} from "react-router-dom";
import * as productService from "../service/product/ProductService";
import {changeImage, formatDescription} from "../service/product/ProductService"
import * as orderService from "../service/order/CartService";
import {toast} from "react-toastify";
import "./styles.css";

export default function DetailProduct() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState();
    const param = useParams();

    let username;

    const findByIdProduct = async () => {
        try {
            const res = await productService.getProductById(param.id);
            console.log(res)
            if (res.status === 200) {
                setProduct(res.data);
            }
        } catch (e) {
            navigate("/")
        }
    }

    useEffect(() => {
        findByIdProduct();
    }, [])

    if (authToken()) {
        username = authToken().sub;
    }

    const getAllCart = async (id) => {
        try {
            let res = await cartService.listCart(id);
            setCart(res.data);
        } catch (e) {
            navigate("/");
        }
    }

    const getByCustomer = async () => {
        try {
            if (authToken()) {
                let res = await customerService.getByCustomer(username);
                setCustomer(res.data);
                getAllCart(res.data.id);
            }
        } catch (e) {
            navigate("/");
        }
    }


    useEffect(() => {
        getByCustomer();
    }, []);

    const addToCart = async (idProduct) => {
        try {
            if (authToken()) {
                let data = await orderService.addToCart(customer.id, idProduct);
                if (data.status === 200) {
                    getAllCart(customer.id);
                    toast.success("Thêm sản phẩm thành công! ");
                }
            } else {
                toast.warning("Bạn phải đăng nhập mới mua hàng được");
                navigate("/login");
            }

        } catch (e) {
            navigate("/Error");
        }

    }

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    // if (!customer && username) {
    //     return null;
    // }
    if (!product) {
        return null;
    }


    return (
        <>
            <Header cart={cart.length}/>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className=" col-sm-12 col-md-5 col-lg-5 ">
                                    <div className="images p-3">
                                        <div className="text-center p-4"><img id="mainImage"
                                                                              src={product.mainImage}
                                                                              width="100%" height="350" className="border-on-hover1"/></div>
                                        <div className="thumbnail text-center"><img className="border-on-hover"
                                            onClick={() => changeImage(product.mainImage)}
                                            src={product.mainImage}
                                            width="100"/>


                                            <img onClick={() => changeImage(product.imageOne)} className="border-on-hover2"
                                                 src={product.imageOne}
                                                 width="100"/>
                                            <img onClick={() => changeImage(product.imageTwo)} className="border-on-hover3"
                                                 src={product.imageTwo}
                                                 width="100"/>
                                        </div>
                                    </div>

                                </div>
                                <div className=" col-sm-12 col-md-7 col-lg-7"   >
                                    <div className=" pt-4 ">
                                        <h5 className="text-uppercase ">{product.name}</h5>
                                        <div className="row">
                                            <div className="col-3">
                                                Mã:
                                            </div>
                                            <div className="col-9 describe ">
                                                {product.code}
                                            </div>
                                            <div className="col-3">
                                                Thương hiệu:
                                            </div>
                                            <div className="col-9 describe">
                                                {product.trademark.name}
                                            </div>
                                            <div className="col-3">
                                                Số lượng:
                                            </div>
                                            <div className="col-9 describe">
                                                {product.quantity}
                                            </div>
                                        </div>

                                        <div className="price d-flex flex-row align-items-center mt-1 ">
                                            <div className="ml-2 me-2 ">
                                                <span
                                                    className="dis-price text-danger h5 fw-bold">{VND.format(product.promotionalPrice)}</span>
                                            </div>
                                            {product.promotionalPrice !== product.startPrice ?
                                                < small
                                                    className="act-price text-decoration-line-through">{VND.format(product.startPrice)}</small>
                                                :
                                                <></>
                                            }


                                        </div>

                                        <div>
                                            <ul className="list-style9 no-margin mt-3">
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5 ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Chiều dài:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">

                                                        <p>{product.length}</p>
                                                    </div>
                                                </li>
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5 ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Trọng lượng:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">
                                                        <p>{product.weight}</p>
                                                    </div>
                                                </li>
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5 ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Độ cứng:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">
                                                        <p>{product.hardness}</p>
                                                    </div>
                                                </li>
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5 ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Chu vi cán vợt:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">
                                                        <p>{product.handleCircumference}</p>
                                                    </div>
                                                </li>
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5  ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Sức căng tối đa:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">
                                                        <p>{product.maximumTensionLevel}</p>
                                                    </div>
                                                </li>
                                                <li className="row">
                                                    <div className="col-md-5 col-lg-5 ">
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        <span> Màu sắc:</span>
                                                    </div>
                                                    <div className="col-md-7 col-lg-7 describe">
                                                        <p>{product.color}</p>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="cart mt-4 align-items-center mb-3">
                                            <button onClick={() => addToCart(product.id)}
                                                    className="btn btn-outline-danger  mr-2 px-4">Đặt
                                                hàng
                                            </button>
                                            {/*<i className=" ms-2 fa fa-heart text-muted"></i>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-2  ">
                                <h5 className="describe text-decoration-underline">Mô tả sản phẩm</h5>
                                <div>
                                    {formatDescription(product.description)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}