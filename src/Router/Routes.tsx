import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home/home";
import Veicles from "../Pages/Veicles/veicles";
import Shop from "../Pages/Shop/shop";
import Credit_card from "../Components/CVV/credit_card";

const RunRoutes = () => {
    
    return(
        <Routes>
            <Route  path="/" element={
                <>
                    <Home/>
                </>
            }/>

            <Route path="veicles" element={<Veicles/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="CVV" element={<Credit_card/>} />
        </Routes>
    )
}

export default RunRoutes