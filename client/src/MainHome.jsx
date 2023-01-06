import React,{useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LHeader from "./Lheader";
function MainHeader(){

    return <div>
        <Header />
        <Outlet/>
    </div>
}
export default MainHeader