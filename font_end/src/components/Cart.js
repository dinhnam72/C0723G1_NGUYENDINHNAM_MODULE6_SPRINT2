import * as cartService from "../service/order/CartService";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as payService from "../service/order/PayService";
import {Form, Formik} from "formik";


export default function Cart({setShowCart, customer}) {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        getAllCart();
    }, []);
    console.log(customer)
    const getAllCart = async () => {
        try {
            let res = await cartService.listCart(customer.id);
            setCart(res.data);
        } catch (e) {
            // toast.warning("Bạn chưa đăng nhập")
            navigate("/");

        }
    }

    // Tính tổng tiền
    const getTotalPrice = () => {
        let total = 0;
        cart.map(item => {
            total += item.product.promotionalPrice * item.amount;
        });

        setTotalPrice(total);
    }
    useEffect(() => {
        getTotalPrice();
    });
    // Tăng giảm số lượng sản phẩm
    const changeQuantity = async (item, calculation) => {
        if (item.amount === 1 && calculation === "-") {

        } else if (item.amount === item.product.quantity && calculation === "+") {

        } else {
            let res = await cartService.calculation(customer.id, item.product.id, calculation);
            getAllCart();
        }
    }
    // Xóa sản phẩm
    const removeProduct = async (idProduct) => {
        let res = await cartService.deleteCart(customer.id, idProduct);
        if (res.status === 200) {
            toast.success("Xóa sản phẩm thành công");
            getAllCart();
        }
    }

    // Format tiền thành kiểu VNĐ
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const initValues = {
        totalPrice: totalPrice
    }
    const handlerSubmitForPay = async (value) => {
        let order = JSON.parse(localStorage.getItem('order'));
        if (order) {
            localStorage.removeItem('order');
        }
        if (cart.length > 0) {
            order = {idCustomer: customer.id}
            localStorage.setItem('order', JSON.stringify(order));
            try {
                const url = await payService.pay(totalPrice * 1, customer.id);
                if (url.status===200){
                    window.location.href = url.data;
                }

            } catch (e) {
                navigate("/Error")
            }
        } else {
            navigate("/")
            toast.warning("Bạn chưa có sản phẩm nào.");
        }
    }

    return (
        <>
            <div className="container-fluid">
                <h2 className="text-center mt-3 mb-4 ">GIỎ HÀNG CỦA BẠN</h2>

                {cart.length !== 0 ?
                    (
                        <div className="row">
                            <div className="col-sm-12 col-md-9 col-lg-9">

                                <table className="table table-hover">
                                    <thead className=" table-primary">
                                    <tr className="text-center">
                                        <th><input type="checkbox" className="form-check-input"/></th>
                                        <th></th>
                                        <th>SẢN PHẨM</th>
                                        <th>GIÁ</th>
                                        <th>SỐ LƯỢNG</th>
                                        <th>TỔNG TIỀN</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center fw-bold align-text-top">
                                    {cart.map(item =>
                                        <tr key={item.id}>
                                            <td><input type="checkbox" className="form-check-input"/></td>
                                            <td><img
                                                src={item.product.mainImage}
                                                width="100" height="100"/>
                                            </td>
                                            <td className="text-start">
                                                <span className="">{item.product.name}</span>
                                                <span className="d-block">({item.product.quantity} cái)</span>
                                            </td>
                                            <td>
                                                {VND.format(item.product.promotionalPrice)}
                                            </td>
                                            <td className=" align-items-center">
                                                <div className="d-flex justify-content-center row">
                                                    <p onClick={() => {
                                                        changeQuantity(item, "-");
                                                    }}
                                                       className="col-5 text-end text-dark"><i
                                                        className="fas fa-minus"></i></p>
                                                    <input style={{marginBottom: "4px", marginTop: "-6px"}}
                                                           type=""
                                                           className="form-control-sm col-2 fw-bold text-center"
                                                           value={item.amount}/>
                                                    <p onClick={() => {
                                                        changeQuantity(item, "+");
                                                    }}
                                                       className="col-5 text-start text-dark"><i
                                                        className="fas fa-plus"></i></p>
                                                </div>
                                            </td>
                                            <td className="align-items-center">
                                                {VND.format(item.product.promotionalPrice * item.amount)}
                                            </td>
                                            <td className="align-items-center">
                                                <button type="button" className="btn btn-outline-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#delete"><i
                                                    className="fas fa-trash-alt"></i>
                                                </button>
                                                <div className="modal fade" id="delete" tabIndex="-1"
                                                     aria-labelledby="exampleModalLabel"
                                                     aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5"
                                                                    id="exampleModalLabel">Xác nhận xóa</h1>
                                                                <button type="button" className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Bạn có chắc chắn muốn xóa</p>
                                                                <p className="text-danger">{item.product.name}</p>
                                                                <p>ra khỏi giỏ hàng không?</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Không
                                                                </button>
                                                                <button onClick={() => removeProduct(item.product.id)}
                                                                        type="button"
                                                                        className="btn btn-warning"
                                                                        data-bs-dismiss="modal">Có
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <div className="d-flex mb-3">
                                    <span className="fw-bold">Giao tới</span>
                                    <button type="button" className="ms-auto btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>

                                </div>
                                <div className="fw-bold mb-3">
                                    <span className="me-2">{customer.name}</span>|| <span
                                    className="ms-2">{customer.phone}</span>
                                </div>
                                <div className="mb-5">
                                    <span>{customer.address}</span>
                                </div>
                                <div className="mb-3 h5">
                                    Tổng tiền: <span className="text-danger">
                                    {VND.format(totalPrice)}
                            </span>
                                </div>
                                <Formik initialValues={initValues}
                                        onSubmit={values => handlerSubmitForPay(values)}
                                >
                                    <Form>
                                        <button type={"submit"} className="btn btn-outline-danger w-100">Thanh Toán
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    )
                    :
                    (<div>
                        <p className="fw-bold text-center text-danger">Giỏ hàng của bạn đang trống.</p>
                        <p className="fw-bold text-center text-danger">Nhanh tay chọn cho mình những cây vợt ưa
                            thích.</p>
                    </div>)
                }


            </div>

            {/*Cập nhật thông tin*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cập Nhật Thông Tin</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <label htmlFor="name">Họ và tên: <span className="text-danger"> (*)</span></label>
                            <input className="form-control" id="name" name="name" value="Nguyễn Đình Nam"/>
                            <label htmlFor="phone">Số điện thoại: <span className="text-danger"> (*)</span></label>
                            <input className="form-control" id="phone" name="phone" value="0834578264"/>
                            <label htmlFor="address">Địa chỉ: <span className="text-danger"> (*)</span></label>
                            <textarea className="form-control" id="address" name="address"
                            >Thôn Thống Nhất, xã An Ninh, huyện Quảng Ninh, tỉnh Quảng Bình
                </textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}