import React, { useEffect } from "react"
import {Outlet} from "react-router-dom"
import NavbarBlog from "./navbar"
import FooterbarBlog from "./footer"
import axiosRequest from "helpers/axiosHelper"

const Component = () => {
    useEffect(() => {
        const login = async () => {
            try {
                const response = await axiosRequest("http://localhost:8000/cms_kerjabersih/api/login", "POST", {
                    username: process.env.REACT_APP_USERNAME,
                    password: process.env.REACT_APP_PASSWORD
                });
                console.log("Login successful. Response: ", response);
            } catch (error) {
                console.error("Error logging in: ", error);
            }
        }
        login()
    }, []);
    return(
        <>
        <NavbarBlog />
        <Outlet />
        <FooterbarBlog />
        </>
    )
}
export default Component