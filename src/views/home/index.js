import React, { useEffect } from "react"
import Banner from "../../components/Banner"
import Download from "../../components/Download"
import Carousel from "../../components/Carousel"
import Cardimage from "../../components/Cardimage"
import { useTextContext } from "../../context/TextContext"

const Component = () => {
    const { setShowText } = useTextContext()

    useEffect(() => {
        setShowText(true)
    },[setShowText])
    return (
        <>
        <main>
            <Banner />
            <Download />
            <Carousel />
            <Cardimage />
        </main>
        </>
    )
}
export default Component