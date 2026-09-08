import { Routes,Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/SignIn";
import Register from "./src/Pages/Register";


export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
    )
}