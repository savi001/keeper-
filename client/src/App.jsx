import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import MainHeader from "./MainHome"
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHeader/>}>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    )

}
export default App