import React from 'react'
import Layout from "layouts"
import Home from "views/home"
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
        }
    ]
}
export default Blog;