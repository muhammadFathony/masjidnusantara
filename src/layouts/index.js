import React, { useEffect } from "react"
import {Outlet} from "react-router-dom"
import NavbarBlog from "./navbar"
import FooterbarBlog from "./footer"
import axiosRequest from "helpers/axiosHelper"
import Cookies from "js-cookie";

const Component = () => {
    useEffect(() => {
        const login = async () => {
            try {
                const response = await axiosRequest(`${process.env.REACT_APP_BASE_URL}api/login`, "POST", {
                    username: process.env.REACT_APP_USERNAME,
                    password: process.env.REACT_APP_PASSWORD
                });
                if(response.metadata.code === 200){
                    Cookies.set('accessToken', response.data.token, {expires: 7, path:''});
                }
            } catch (error) {
                console.error("Error logging in: ", error);
            }
        }
       
        const accessToken = Cookies.get('accessToken');
        if(accessToken){
            console.log('Access token is available:', accessToken);
        } else {
            console.log('Access token is not available');
            login()
        }
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