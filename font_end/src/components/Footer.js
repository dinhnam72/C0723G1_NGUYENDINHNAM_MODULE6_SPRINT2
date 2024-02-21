export default function Footer(){
    return(
        <>
            <div className="container-fluid ">

                <footer
                    className="text-center text-lg-start text-white"
                    style={{backgroundColor: "#1c2331"}}
                >
                    <section >
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-5">
                                <div className="col-xs-12 col-md-6 col-lg-3 mx-auto mb-4 mt-5">
                                    <h6 className=" fw-bold">THÔNG TIN CHUNG</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p>
                                        <span style={{color: "#e95221"}}>TfofmisN Sports</span> là hệ thống cửa hàng cầu
                                        lông với hơn 50 chi nhánh trên toàn quốc, cung cấp sỉ và lẻ các mặt hàng dụng cụ
                                        cầu lông từ phong trào tới chuyên nghiệp
                                    </p>
                                    <p>
                                        <span style={{color: "#e95221"}}>Với sứ mệnh</span>: "TfofmisN cam kết mang đến
                                        những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để
                                        nâng cao sức khỏe của chính mình."
                                    </p>
                                    <p>
                                        <span style={{color: "#e95221"}}>Tầm nhìn</span>: "Trở thành nhà phân phối và sản
                                        xuất thể thao lớn nhất Việt Nam"
                                    </p>
                                </div>
                                <div className="col-xs-12 col-md-4 col-lg-3 mx-auto mb-4 mt-5">
                                    <h6 className=" fw-bold">CHÍNH SÁCH</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#!" className="text-white">Chính sách đổi trả, hoàn tiền</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Chính sách hoàn tiền</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Chính sách xử lý khiếu nại</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Chính sách vận chuyển</a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="col-xs-12 col-md-4 col-lg-3 mx-auto mb-4 mt-5">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Help</a>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-3 mx-auto mb-md-0 mb-4 mt-5">
                                    <h6 className="text-uppercase fw-bold">LIÊN HỆ</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p><i className="fas fa-home mr-3"></i> Thanh Khê - Đà Nẵng - Việt Nam</p>
                                    <p><i className="fas fa-envelope mr-3"></i> tfofmisn@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> 0399839632 | 0788612959</p>
                                    <p><i className="fas fa-print mr-3"></i> 01 234 567 89</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    <div
                        className="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        © 2010 Copyright : TfofmisN

                    </div>

                </footer>

            </div>
        </>
    )
}