import React from "react"
import {Outlet} from "react-router-dom"
import NavbarBlog from "./navbar"
import FooterbarBlog from "./footer"

const Component = () => {
    return(
        <>
        <NavbarBlog />
        <Outlet />
        <FooterbarBlog />
        </>
    )
}
export default Component