import React from 'react'
import Layout from "layouts"
import Home from "views/home"
import Gallery from "views/gallery"
import DetailGallery from "views/gallery/detail";
import Profile from "views/profile"
const Blog = {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "beranda",
            element: <Home />
        },
        {
            path: "galeri",
            element: <Gallery />
        },
        {
            path: "galeri/detail",
            element: DetailGallery 
        },
        {
            path: "tentangkami",
            element: <Profile />
        }
    ]
}
export default Blog;