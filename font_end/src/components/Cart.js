import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
    return (
        <>
            <Header/>
            <div className="container-fluid">
                <h2 className="text-center mt-3 mb-4 ">GIỎ HÀNG CỦA BẠN</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <table className="table table-hover">
                            <thead className="">
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
                            <tr>
                                <td><input type="checkbox" className="form-check-input"/></td>
                                <td><img
                                    src="image/cap-vot-cau-long-kumpoo-pc-66-xanh-lam-noi-dia-trung_1706142203.webp"
                                    width="100" height="100"/>
                                </td>
                                <td className="text-start">
                                    <span className="">Cặp Vợt Cầu Lông Kumpoo PC-66 (Nội Địa Trung)</span>
                                    <span className="d-block">(25 cái)</span>
                                </td>
                                <td>
                                    2.000.000 VND
                                </td>
                                <td className=" align-items-center">
                                    <div className="d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="10"/>
                                        <a href="#" className="col-5 text-start text-dark"><i
                                            className="fas fa-plus"></i></a>
                                    </div>
                                </td>
                                <td className="align-items-center">200.000 VND</td>
                                <td className="align-items-center">
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-check-input"/></td>
                                <td><img
                                    src="image/set-vot-cau-long-victor-jetspeed-s-cny-limited-xach-tay_1704836931.webp"
                                    width="100" height="100"/></td>
                                <td className="text-start">
                                    <span>Cặp Vợt Cầu Lông Kumpoo PC-66 (Nội Địa Trung)</span>
                                    <span className="d-block">(25 cái)</span>
                                </td>
                                <td>
                                    1.000.000 VND
                                </td>
                                <td>
                                    <div className=" d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="2"/>
                                        <a href="#" className="col-5 text-start text-dark"><i
                                            className="fas fa-plus"></i></a>
                                    </div>

                                </td>
                                <td>
                                    200.0000 VND
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-check-input"/></td>
                                <td><img src="image/vot-cau-long-lining-halbertec-7000-noi-dia-trung-8_1700082393.webp"
                                         width="100" height="100"/></td>
                                <td className="text-start">
                                    <span>Cặp Vợt Cầu Lông Kumpoo PC-66 (Nội Địa Trung)</span>
                                    <span className="d-block">(25 cái)</span>
                                </td>
                                <td>
                                    100.000 VNĐ
                                </td>
                                <td>
                                    <div className=" d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="5"/>
                                        <a href="#" className="col-5 text-start text-dark"><i
                                            className="fas fa-plus"></i></a>
                                    </div>
                                </td>
                                <td>
                                    500.0000 VNĐ
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <form>
                            <div className="d-flex mb-3">
                                <span className="fw-bold">Giao tới</span>
                                <button type="button" className="ms-auto btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>

                            </div>
                            <div className="fw-bold mb-3">
                                <span className="me-2">Nguyễn Đình Nam</span>|| <span className="ms-2">0834578264</span>
                            </div>
                            <div className="mb-5">
                                <span>Thôn Thống Nhất, xã An Ninh, huyện Quảng Ninh, tỉnh Quảng Bình</span>
                            </div>
                            <div className="mb-3 h5">
                                Tổng tiền: <span className="text-danger">3.000.000 VNĐ</span>
                            </div>
                            <button className="btn btn-outline-danger w-100">Thanh Toán</button>
                        </form>
                    </div>
                </div>

            </div>


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
            <Footer/>
        </>
    )
}