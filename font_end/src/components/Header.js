import logo from "./img/logo_new.png";
import "./styles.css";
import {NavLink} from "react-router-dom";
import authToken from "../service/units/UserToken";
import ModalLogout from "./ModalLogout";

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container px-4 px-lg-5">
                    <div className="nav col-1 col-md-1">
                        <a className="navbar-brand" href="#">
                            <img src={logo} height="70" width="70"/></a>

                    </div>
                    <div className="collapse col-10 col-md-10 navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav col-10  text-small">
                            <li className="col-4">
                                <i className="fa-solid fa-user-astronaut icon-home"></i>
                                <i className="icon-hotline"></i>
                                <span>Hotline:</span>
                                <a href="#" title="Hotline: 0399839632 | 0788612959"
                                   className="hotline text-decoration-none ">
                                    0399839632 | 0788612959 </a>
                            </li>
                            <li className="list-top-item header-stores col-4">
                                <i className="fa-solid fa-map-location-dot icon-home"></i>
                                <a href="/#" className="text-decoration-none text-black " title="Hệ thống cửa hàng">
                                    Hệ thống cửa hàng
                                </a>
                            </li>
                            <li className="list-top-item header_tim_kiem col-4">

                                <form action="/tim-kiem" method="get"
                                      className="header-search-form input-group search-bar"
                                      role="search">
                                    <input type="text" name="tu_khoa" required=""
                                           className="input-group-field auto-search search-auto form-control"
                                           placeholder="Tìm sản phẩm..." autoComplete="off"/>

                                    <button type="submit" className="btn icon-fallback-text" aria-label="Tìm kiếm"
                                            title="Tìm kiếm">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.1404 13.4673L19.852 19.1789C20.3008 19.6276 19.6276 20.3008 19.1789 19.852L13.4673 14.1404C12.0381 15.4114 10.1552 16.1835 8.09176 16.1835C3.6225 16.1835 0 12.5613 0 8.09176C0 3.6225 3.62219 0 8.09176 0C12.561 0 16.1835 3.62219 16.1835 8.09176C16.1835 10.1551 15.4115 12.038 14.1404 13.4673ZM0.951972 8.09176C0.951972 12.0356 4.14824 15.2316 8.09176 15.2316C12.0356 15.2316 15.2316 12.0353 15.2316 8.09176C15.2316 4.14797 12.0353 0.951972 8.09176 0.951972C4.14797 0.951972 0.951972 4.14824 0.951972 8.09176Z"
                                                fill="#e95211"></path>
                                        </svg>
                                    </button>
                                </form>
                            </li>
                        </ul>
                        <div className="d-flex col-2 col-md-2">
                            <div className="col-4 ms-2 mt-2">
                                {authToken() ?
                                    (<div className="dropdown">
                                            <i className="fas fa-user-circle fs-2 icon-home"
                                               id="logout" data-bs-toggle="dropdown"
                                               aria-expanded="false"></i>
                                            <ul className="dropdown-menu" aria-labelledby="logout">
                                                <li>

                                                        <button className="dropdown-item"  data-bs-toggle="modal"
                                                                data-bs-target="#logoutUser">Đăng Xuất
                                                        </button>

                                                </li>
                                            </ul>
                                            <ModalLogout/>
                                    </div>
                                    )
                                    :
                                    (<NavLink to={"/login"}>
                                        <i className="fa-solid fa-arrow-right-to-bracket fs-2 icon-home"></i>
                                    </NavLink>)
                                }



                            </div>
                            <div className="col-8">
                                <a href="#" className="cart-icon">
                                    <i className="bi-cart-fill me-1 fs-2 icon-home"></i>
                                    <span className="cart-quantity badge text-white ms-1 rounded-pill">0</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <nav>
                    <div className="px-3 py-1 navbar123 text-white">
                        <div className="container d-flex align-items-center justify-content-center">
                            <ul className=" nav col-12  justify-content-center text-small">
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        TRANG CHỦ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        GIỚI THIỆU
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        SẢN PHẨM
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        CHỨNG CHỈ CHẤT LƯỢNG
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        HOẠT ĐỘNG CÔNG TY
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        ĐỐI TÁC
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        LIÊN HỆ
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}