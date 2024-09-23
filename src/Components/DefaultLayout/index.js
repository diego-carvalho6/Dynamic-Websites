import FooterComponent from "../Footer"
import HeaderComponent from "../Header"
import { Outlet } from "react-router-dom";

const DefaultLayoutComponent = () =>  {


    return <><HeaderComponent/><Outlet/><FooterComponent/></>
}

export default DefaultLayoutComponent