import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home/home";
import Veicles from "../Pages/Veicles/veicles";

const RunRoutes = () => {
    
    return(
        <Routes>
            <Route  path="/" element={
                <>
                    <Home/>
                </>
            }/>

            <Route path="veicles" element={<Veicles/>} />
        </Routes>
    )
}

export default RunRoutes