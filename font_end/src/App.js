import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.min.css"
import {ToastContainer} from "react-toastify";
import Cart from "./components/Cart";
import SuccessPay from "./components/SuccessPay";
import DetailProduct from "./components/DetailProduct";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/success" element={<SuccessPay/>}/>
                <Route path="/detail/:id" element={<DetailProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
