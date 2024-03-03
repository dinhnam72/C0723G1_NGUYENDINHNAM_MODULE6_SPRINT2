import logo from "./img/logo_new.png";
import Header from "./Header";
import Footer from "./Footer";
import {Field, Formik, Form, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";
import * as Yup from "yup";
import * as authService from "../service/auth/AuthService";
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Login() {
    const user = JSON.parse(localStorage.getItem(`user`));
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(`/`);
        }
    }, []);


    const initValues = {
        username: "",
        password: ""
    }
    const validateFormLogin = Yup.object({
        username: Yup.string()
            .required("Vui lòng nhập tên đăng nhập ."),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu.")
    });

    const handleSubmitFormLogin = async (values, {setFieldError}) => {
        try {
            const res = await authService.login(values);

            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate("/")
                toast.success("Đăng nhập thành công !");

            }
        } catch (e) {
            setFieldError("password", e.data);


        }
    }
    // const backgroundImage = `url(${logoImage})`;
    return (
        <>
            <Header/>
            <div className="container pt-lg-5 mb-5">
                <div className="d-flex justify-content-center">

                    <div className="col-6">
                        <div className="form-control shadow rounded-0 p-4">
                            <h3 className="text-center mt-5">ĐĂNG NHẬP</h3>
                            <div className="row py-5  align-items-center">
                                <div className="col-md-6 col-lg-6 pr-lg-5 mb-5 mb-md-0 mp"
                                     style={{textAlign: "center"}}>
                                    <img
                                        alt="img"
                                        className="img-fluid mb-3 d-none d-md-block rounded-5" src={logo}
                                        height="500" width="500"/>
                                </div>

                                <div className="col-md-6 col-lg-6 ml-auto">
                                    <Formik initialValues={initValues}
                                            onSubmit={(values, {setFieldError}) => handleSubmitFormLogin(values, {setFieldError})}
                                            validationSchema={validateFormLogin}>
                                        <Form>
                                            <div className="row">
                                                <div className="input-group col-lg-6 mb-4">
                                                    <label htmlFor="userName"
                                                           className="input-group-text bg-white px-4 border-md border-right-0">
                                                        <i className="fas fa-user"></i>
                                                    </label>
                                                    <Field id="username" type="text" name="username"
                                                           placeholder="Tên đăng nhập"
                                                           className="form-control bg-white border-left-0 border-md"/>
                                                </div>
                                                <div className="input-group col-lg-6 mb-4">
                                                    <label htmlFor="password"
                                                           className="input-group-text bg-white px-4 border-md border-right-0">
                                                        <i className="fas fa-lock"></i>
                                                    </label>
                                                    <Field id="password" type="password" name="password"
                                                           placeholder="Mật khẩu"
                                                           className="form-control bg-white border-left-0 border-md"/>
                                                </div>
                                                <ErrorMessage name="password" className="text-danger"
                                                              component="p"/>

                                                <div className="d-flex me-5 justify-content-center gap-3">
                                                    <button className="btn text-white login btn-sm w-100"
                                                            style={{background: "#e95221"}}>Đăng nhập
                                                    </button>
                                                </div>
                                                <div className="d-flex me-5 justify-content-center gap-3 mt-1">
                                                    <NavLink to={"/register"}
                                                             className="btn btn-primary text-white btn-sm w-100">Đăng
                                                        ký</NavLink>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <Link
                                                        className="ml-auto text-decoration-none italic-link text-black">Quên
                                                        mật khẩu?</Link>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
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